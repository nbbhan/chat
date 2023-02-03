const bcrypt = require('bcryptjs')
const { UserInputError, AuthenticationError } = require('apollo-server')
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize')

const { Message, User } = require('../../models')
const { JWT_SECRET } = require('../../config/env.json')

module.exports = {
    Query: {
        getUsers: async (_, __, { user }) => {
            try {
                if (!user) throw new AuthenticationError('Unauthenticated')

                let users = await User.findAll({
                    attributes: ['username', 'imageUrl', 'createdAt'],
                    where: { username: { [Op.ne]: user.username } },
                })

                const allUserMessages = await Message.findAll({
                    where: {
                        [Op.or]: [{ from: user.username }, { to: user.username }],
                    },
                    order: [['createdAt', 'DESC']],
                })

                users = users.map((otherUser) => {
                    const latestMessage = allUserMessages.find(
                        (m) => m.from === otherUser.username || m.to === otherUser.username,
                    )
                    otherUser.latestMessage = latestMessage
                    return otherUser
                })

                return users
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        login: async (_, args) => {
            const { username, password } = args
            let errors = {}

            try {
                if (username.trim() === '') errors.username = '※ユーザーネームを入力してください'
                if (password === '') errors.password = '※パスワードを入力してください'

                if (Object.keys(errors).length > 0) {
                    throw new UserInputError('bad input', { errors })
                }

                const user = await User.findOne({
                    where: { username },
                })

                if (!user) {
                    errors.username = 'ユーザーが見つかりません'
                    throw new UserInputError('ユーザーが見つかりません', { errors })
                }

                const correctPassword = await bcrypt.compare(password, user.password)

                if (!correctPassword) {
                    errors.password = 'パスワードが間違っています'
                    throw new UserInputError('パスワードが間違っています', { errors })
                }

                const token = jwt.sign({ username }, JWT_SECRET, {
                    expiresIn: 60 * 60,
                })

                return {
                    ...user.toJSON(),
                    createdAt: user.createdAt.toISOString(),
                    token,
                }
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        getProfile: async (_, __, { user }) => {
            try {
                if (!user) throw new AuthenticationError('Unauthenticated')

                let users = await User.findAll({
                    attributes: ['username', 'imageUrl', 'createdAt', 'buyPoint', 'getPoint', 'follow'],
                    where: { username: { [Op.eq]: user.username } },
                })

                return users
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
    Mutation: {
        register: async (_, args) => {
            let { username, email, password, confirmPassword } = args
            let errors = {}

            try {
                // Validate input data
                if (email.trim() === '') errors.email = '※メールアドレスを入力してください'
                if (username.trim() === '') errors.username = '※ユーザーネームを入力してください'
                if (password.trim() === '') errors.password = '※パスワードを入力してください'
                if (confirmPassword.trim() === '') errors.confirmPassword = '※パスワードをもう一度入力してください'

                if (password !== confirmPassword) errors.confirmPassword = '※パスワードが一致しません'

                // // Check if username / email exists
                // const userByUsername = await User.findOne({ where: { username } })
                // const userByEmail = await User.findOne({ where: { email } })

                // if (userByUsername) errors.username = 'Username is taken'
                // if (userByEmail) errors.email = 'Email is taken'

                if (Object.keys(errors).length > 0) {
                    throw errors
                }

                // Hash password
                password = await bcrypt.hash(password, 6)

                // Create user
                const user = await User.create({
                    username,
                    email,
                    password,
                })

                // Return user
                return user
            } catch (err) {
                console.log(err)
                if (err.name === 'SequelizeUniqueConstraintError') {
                    err.errors.forEach((e) => (errors[e.path] = `${e.path} is already taken`))
                } else if (err.name === 'SequelizeValidationError') {
                    err.errors.forEach((e) => (errors[e.path] = e.message))
                }
                throw new UserInputError('Bad input', { errors })
            }
        },
        changeProfile: async (_, args) => {
            try {
                let users = await User.findOne({
                    where: { username: { [Op.eq]: `${args.user}` } },
                }).then((user) => {
                    user.imageUrl = `${args.img}`
                    user.save()
                })

                return users
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
