import { gql, useQuery } from '@apollo/client'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { useMessageDispatch, useMessageState } from '~/context/message'
import { Data } from '../../Provider'

const GET_USERS = gql`
    query getUsers {
        getUsers {
            username
            email
            createdAt
            imageUrl
            latestMessage {
                uuid
                from
                to
                content
                createdAt
            }
        }
    }
`

function Users() {
    const myData = useContext(Data)

    const { users } = useMessageState()

    const dispatch = useMessageDispatch()

    const { loading } = useQuery(GET_USERS, {
        onCompleted: (data) => {
            return dispatch({ type: 'SET_USERS', payload: data.getUsers })
        },
        onError: (err) => console.log(err),
    })

    let usersMarkup

    if (!users || loading) {
        usersMarkup = (
            <div className="chatbox-login">
                <Link to="/login">
                    <div>ログイン</div>
                </Link>
            </div>
        )
    } else if (users.length === 0) {
        usersMarkup = <p>No users have joined yet</p>
    } else if (users.length > 0) {
        usersMarkup = users.map((user, index) => (
            <div
                className="chatbox-container-item"
                key={index}
                onClick={() => {
                    dispatch({ type: 'SET_SELECTED_USER', payload: user.username })

                    myData.setChatbox('show')
                }}
            >
                <div className="chatbox-container-item-avatar">
                    <img src={user.imageUrl} />
                </div>

                <div style={{ height: '100%' }}>
                    <div className="chatbox-container-item-name">{user.username}</div>

                    <div className="chatbox-container-item-message">
                        {user.latestMessage ? user.latestMessage.content : '接続しました！'}
                    </div>
                </div>
            </div>
        ))
    }

    const handleChat = () => {
        myData.handleChatshow()
    }

    return (
        <>
            <div className="chatbox-main">
                <div className="chatbox-title">
                    CHAT BOX
                    <img />
                </div>

                <div className="chatbox-search">
                    {/* <input type="text" placeholder="検索..." /> */}
                    <div></div>
                </div>

                <div className="chatbox-container">
                    <div className="chatbox-container-items">{usersMarkup}</div>
                </div>
            </div>

            <div className="chatbox-close">
                <div className="chatbox-close-container" onClick={() => handleChat()}>
                    閉じる
                    <div className="underline"></div>
                </div>
            </div>
        </>
    )
}

export default Users
