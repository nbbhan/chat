import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { gql, useQuery, useLazyQuery } from '@apollo/client'

import { Data } from '../../Provider'

import Message from '../Message'
import close from '~/Imgs/close.png'

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

const GET_MESSAGES = gql`
    query getMessages($from: String!) {
        getMessages(from: $from) {
            uuid
            from
            to
            content
            createdAt
        }
    }
`

function Chatbox() {
    const myData = useContext(Data)

    const [chatbox, setChatbox] = useState('')

    const { loading, data, error } = useQuery(GET_USERS)

    const [selectedUser, setSelectedUser] = useState(null)

    const [getMessages, { loading: messagesLoading, data: messagesData }] = useLazyQuery(GET_MESSAGES)

    useEffect(() => {
        if (selectedUser) {
            getMessages({ variables: { from: selectedUser } })
        }
    }, [selectedUser])

    // if (messagesData) console.log(messagesData.getMessages)

    let usersMarkup

    if (!data || loading) {
        usersMarkup = (
            <div className="chatbox-login">
                <Link to="/login">
                    <div>ログイン</div>
                </Link>
            </div>
        )
    } else if (data.getUsers.length === 0) {
        usersMarkup = <p>No users have joined yet</p>
    } else if (data.getUsers.length > 0) {
        usersMarkup = data.getUsers.map((user, index) => (
            <div
                className="chatbox-container-item"
                key={index}
                onClick={() => {
                    setSelectedUser(user.username)

                    setChatbox('show')

                    myData.setUn(user.username)
                }}
            >
                <div className="chatbox-container-item-avatar">
                    <img src={user.imageUrl} />
                </div>

                <div style={{ height: '100%' }}>
                    <div className="chatbox-container-item-name">{user.username}</div>

                    <div className="chatbox-container-item-message">
                        {user.latestMessage ? user.latestMessage.content : 'You are now connected!'}
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className="chatbox" style={{ display: `${myData.chatshow}` }}>
            <div className="chatbox-title">
                CHAT BOX
                <img />
            </div>

            <div className="chatbox-search">
                <input type="text" placeholder="検索..." />
            </div>

            <div className="chatbox-container">
                <div className="chatbox-container-items">{usersMarkup}</div>
            </div>

            <div className={`chatbox-chat ${chatbox}`}>
                <div className="message-title">
                    <div className="message-close" onClick={() => setChatbox('hide')}>
                        <img src={close} />
                    </div>

                    <div className="message-name">{myData.un}</div>
                </div>

                <div className="message">
                    {messagesData && messagesData.getMessages.length > 0 ? (
                        messagesData.getMessages.map((message) => <Message message={message}></Message>)
                    ) : (
                        <div className="received" style={{ marginLeft: '1rem' }}>
                            Contact now!
                        </div>
                    )}
                </div>

                <div className="message-send"></div>
            </div>
        </div>
    )
}

export default Chatbox

{
    /* <div className="chatbox-chat-avatar">
        <img src={user.imageUrl} />
    </div> */
}
