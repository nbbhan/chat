import { useContext } from 'react'

import { Data } from '../../Provider'

import Users from '../Users'
import Messages from '../Messages'

function Chatbox() {
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
