import { useContext } from 'react'

import cancel from '~/Imgs/cancelC.png'
import add from '~/Imgs/addC.png'

import { Data } from '~/Provider'

function Noti() {
    const myData = useContext(Data)

    const handleClose = () => {
        myData.handleNoti()
    }

    const storage = window.localStorage.getItem('theme')

    return (
        <div className="noti" style={{ display: `${myData.noti}` }}>
            <div className={`noti-main ${storage}`}>
                <div className="noti-close">
                    <div className="noti-close-container">
                        カートに追加しますか?<div className="underline"></div>
                    </div>
                </div>

                <div className="noti-container">
                    <div className="noti-container-left" onClick={() => handleClose()}>
                        <div className="noti-container-item">
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <img src={cancel} />
                                </div>

                                <div>キャンセル</div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="noti-container-right"
                        onClick={() => {
                            myData.setSubmit(!myData.submit)

                            handleClose()
                        }}
                    >
                        <div className="noti-container-item">
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <img src={add} />
                                </div>

                                <div>追加</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noti
