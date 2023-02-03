import { useContext, useEffect } from 'react'
import { gql, useSubscription } from '@apollo/client'

import { Data } from '../../Provider'
import { useAuthState } from '../../context/auth'
import { useMessageDispatch } from '../../context/message'

import Users from '../Users'
import Messages from '../Messages'

const NEW_MESSAGE = gql`
    subscription Subscription {
        newMessage {
            content
            createdAt
            from
            to
            uuid
        }
    }
`

function Chatbox() {
    const messageDispatch = useMessageDispatch()

    const { user } = useAuthState()

    const { data: messageData, error: messageError } = useSubscription(NEW_MESSAGE)

    useEffect(() => {
        if (messageError) console.log(messageError)

        if (messageData) {
            const message = messageData.newMessage
            const otherUser = user.username === message.to ? message.from : message.to

            messageDispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    username: otherUser,
                    message,
                },
            })
        }
    }, [messageError, messageData])

    const myData = useContext(Data)

    const storage = window.localStorage.getItem('theme')

    return (
        <div className={`chatbox ${storage}`} style={{ display: `${myData.chatshow}` }}>
            <Users />

            <Messages />
        </div>
    )
}

export default Chatbox
