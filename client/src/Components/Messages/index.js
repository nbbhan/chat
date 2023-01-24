import { gql, useLazyQuery, useMutation } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'

import { useMessageDispatch, useMessageState } from '~/context/message'
import { Data } from '../../Provider'

import Message from '../Message'
import close from '~/Imgs/close.png'
import close_dark from '~/Imgs/close_dark.png'
import send from '~/Imgs/send.png'
import send_dark from '~/Imgs/send_dark.png'

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

function Messages() {
    const myData = useContext(Data)

    const { users } = useMessageState()

    const dispatch = useMessageDispatch()

    const [content, setContent] = useState('')

    const selectedUser = users?.find((u) => u.selected === true)?.username

    const [getMessages, { loading: messagesLoading, data: messagesData }] = useLazyQuery(GET_MESSAGES)

    const [sendMessage] = useMutation(SEND_MESSAGE, {
        // onCompleted: (data) =>
        //     dispatch({
        //         type: 'ADD_MESSAGE',
        //         payload: {
        //             username: selectedUser.username,
        //             message: data.sendMessage,
        //         },
        //     }),
        onError: (err) => console.log(err),
    })

    useEffect(() => {
        if (selectedUser && !selectedUser.messages) {
            getMessages({ variables: { from: selectedUser } })
        }
    }, [selectedUser])

    useEffect(() => {
        if (messagesData) {
            dispatch({
                type: 'SET_USER_MESSAGES',
                payload: {
                    username: selectedUser,
                    messages: messagesData.getMessages,
                },
            })
        }
    }, [messagesData])

    const submitMessage = (e) => {
        e.preventDefault()

        if (content.trim() === '' || !selectedUser) return

        setContent('')

        // mutation for sending the message
        sendMessage({ variables: { to: selectedUser, content } })
    }

    const storage = window.localStorage.getItem('theme')

    return (
        <div className={`message ${myData.chatbox} ${storage}`}>
            <div className="message-title">
                <div className="message-close" onClick={() => myData.setChatbox('hide')}>
                    <img src={storage === 'dark' ? close_dark : close} />
                </div>

                <div className="message-name">{selectedUser}</div>
            </div>

            <div className="message-main">
                {messagesData && messagesData.getMessages.length > 0 ? (
                    messagesData.getMessages.map((message, index) => <Message key={index} message={message}></Message>)
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
                        <img src={storage === 'dark' ? send_dark : send} onClick={submitMessage} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Messages

{
    /* <div className="chatbox-chat-avatar">
        <img src={user.imageUrl} />
    </div> */
}
