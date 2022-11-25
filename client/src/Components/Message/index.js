import { useAuthState } from '~/context/auth'
import classname from 'classname'

function Message({ message }) {
    const { user } = useAuthState()

    const sent = message.from === user.username

    const received = !sent

    const clsx = classname({
        sent: sent,
        received: received,
    })

    return (
        <div>
            <div className="message-box" key={message.uuid}>
                <div className={clsx}>{message.content}</div>
            </div>
        </div>
    )
}

export default Message
