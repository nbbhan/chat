import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client'

import { Data } from '../../Provider'
import {} from '~/context/message'
import { useMessageDispatch, useMessageState } from '../../context/message'

import Message from '../Message'
import close from '~/Imgs/close.png'
import send from '~/Imgs/send.png'

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

const SEND_MESSAGE = gql`
    mutation sendMessage($to: String!, $content: String!) {
        sendMessage(to: $to, content: $content) {
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

    const dispatch = useMessageDispatch()

    const [chatbox, setChatbox] = useState('')

    const [content, setContent] = useState('')

    const { users } = useMessageState()

    const selectedUser = users?.find((u) => u.selected === true)?.username

    const { loading } = useQuery(GET_USERS, {
        onCompleted: (data) => dispatch({ type: 'SET_USERS', payload: data.getUsers }),
        onError: (err) => console.log(err),
    })

    const [getMessages, { loading: messagesLoading, data: messagesData }] = useLazyQuery(GET_MESSAGES)

    const [sendMessage] = useMutation(SEND_MESSAGE, {
        onCompleted: (data) =>
            dispatch({
                type: 'ADD_MESSAGE',
                payload: {
                    username: myData.un,
                    message: data.sendMessage,
                },
            }),
        onError: (err) => console.log(err),
    })

    useEffect(() => {
        if (selectedUser) {
            getMessages({ variables: { from: selectedUser } })
        }
    }, [selectedUser])

    // if (messagesData) console.log(messagesData.getMessages)

    const submitMessage = (e) => {
        e.preventDefault()

        if (content.trim() === '' || !selectedUser) return

        setContent('')

        // mutation for sending the message
        sendMessage({ variables: { to: myData.un, content } })

        window.location.reload()
    }

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
                        messagesData.getMessages.map((message, index) => (
                            <Message key={index} message={message}></Message>
                        ))
                    ) : (
                        <div className="received" style={{ marginLeft: '1rem' }}>
                            Contact now!
                        </div>
                    )}
                </div>

                <div className="message-send">
                    <form onSubmit={submitMessage} className="message-form">
                        <div className="message-send-input">
                            <input
                                placeholder="Type a message..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className="message-send-btn">
                            <img src={send} onClick={submitMessage} />
                        </div>
                    </form>
                </div>
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
