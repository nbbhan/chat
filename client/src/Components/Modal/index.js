import { useContext } from 'react'
import { Link } from 'react-router-dom'

import email from '~/Imgs/email.png'
import chat from '~/Imgs/live-chat.png'

import { Data } from '~/Provider'

function Modal() {
    const myData = useContext(Data)

    const handleCM = () => {
        myData.handleCM()
    }

    const handleChat = () => {
        myData.handleChatshow()
        handleCM()
    }

    const storage = window.localStorage.getItem('theme')

    return (
        <div className="modal" style={{ display: `${myData.cm}` }}>
            <div className={`modal-main ${storage}`}>
                <div className="modal-container">
                    <div className="modal-container-left">
                        <Link to="/contact" onClick={() => handleCM()}>
                            <div className="modal-container-item">
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <img src={email} alt="" />
                                    </div>

                                    <div>メールでお問い合わせ</div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="modal-container-right">
                        <div className="modal-container-item" onClick={() => handleChat()}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <img src={chat} alt="" />
                                </div>

                                <div>チャットでお問い合わせ</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-close">
                    <div className="modal-close-container" onClick={() => handleCM()}>
                        閉じる
                        <div className="underline"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
