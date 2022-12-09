import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logoW from '~/Imgs/logoW.png'

import { Data } from '~/Provider'

function NavContainer() {
    const myData = useContext(Data)

    useEffect(() => {}, [myData.width])

    return (
        <div className="navContainer" style={{ animationName: `${myData.width}` }}>
            <div className="navContainer-main">
                <div className="navContainer-main-items" style={{ animationName: `${myData.nav}` }}>
                    <Link to="/">
                        <div
                            className="navContainer-main-item"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '2rem',
                                // border: '1px solid white',
                            }}
                        >
                            <img src={logoW} style={{ width: '80px', height: '80px', marginRight: '2rem' }} />
                        </div>
                    </Link>

                    <div className="navContainer-main-item">
                        <div className="navContainer-main-item-text">
                            ホーム
                            <div className="underline" style={{ background: 'white' }}></div>
                        </div>
                    </div>

                    <div className="navContainer-main-item">
                        <div className="navContainer-main-item-text">
                            チャット
                            <div className="underline" style={{ background: 'white' }}></div>
                        </div>
                    </div>

                    <div className="navContainer-main-item">
                        <div className="navContainer-main-item-text">
                            使い方
                            <div className="underline" style={{ background: 'white' }}></div>
                        </div>
                    </div>

                    <div className="navContainer-main-item">
                        <div className="navContainer-main-item-text">
                            QOKSについて
                            <div className="underline" style={{ background: 'white' }}></div>
                        </div>
                    </div>

                    <div className="navContainer-main-item">
                        <div className="navContainer-main-item-text">
                            お問い合わせ
                            <div className="underline" style={{ background: 'white' }}></div>
                        </div>
                    </div>

                    <div className="navContainer-main-item">
                        <div className="navContainer-main-item-text">
                            設定
                            <div className="underline" style={{ background: 'white' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavContainer
