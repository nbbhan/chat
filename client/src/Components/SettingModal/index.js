import { useContext } from 'react'

import on from '~/Imgs/light-on.png'
import off from '~/Imgs/light-off.png'
import off_dark from '~/Imgs/light-off_dark.png'

import { Data } from '~/Provider'

function Modal() {
    const myData = useContext(Data)

    const handleSM = () => {
        myData.handleSM()
    }

    const storage = window.localStorage.getItem('theme')

    return (
        <div className="modal" style={{ display: `${myData.sm}` }}>
            <div className={`modal-main ${storage}`}>
                <div className="modal-container">
                    <div className="modal-container-left">
                        <div
                            className="modal-container-item"
                            onClick={() => {
                                myData.changeToDark()
                            }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <img src={storage === 'dark' ? off_dark : off} alt="" />
                                </div>

                                <div>ダークテーマ</div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-container-right">
                        <div
                            className="modal-container-item"
                            onClick={() => {
                                myData.changeToLight()
                            }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <img src={on} alt="" />
                                </div>

                                <div>ライトテーマ</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-close">
                    <div className="modal-close-container" onClick={() => handleSM()}>
                        閉じる
                        <div className="underline"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
