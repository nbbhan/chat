import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import home from '~/Imgs/home.png'
import bell from '~/Imgs/bell.png'
import token from '~/Imgs/token.png'
import cart from '~/Imgs/shopping-cart.png'
import chat from '~/Imgs/chat.png'
import info from '~/Imgs/info.png'
import favor from '~/Imgs/favor.png'
import login from '~/Imgs/login.png'
import logout from '~/Imgs/logout.png'
import addUser from '~/Imgs/addUser.png'
import user from '~/Imgs/user.png'
import heart from '~/Imgs/heart.png'
import logoW from '~/Imgs/logoW.png'
import start from '../../Imgs/start.png'

import { Data } from '~/Provider'
import { useAuthDispatch } from '~/context/auth'

function Explore() {
    const myData = useContext(Data)

    const dispatch = useAuthDispatch()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        window.location.reload()
        window.location = '/'
    }

    const handleChat = () => {
        myData.handleChatshow()
    }

    return (
        // <div className="explore" style={{ width: `${myData.width}px` }}>
        <div className="explore">
            <div className="explore-items">
                <div className="explore-items-main">
                    <Link to="/">
                        <div className="explore-item">
                            <img src={logoW} style={{ width: '80px', height: '80px' }} />
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="explore-item">
                            <div style={{ textAlign: 'center' }}>
                                <img src={home} />

                                <div className="explore-item-text">
                                    ホーム
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/cart">
                        <div className="explore-item">
                            <div style={{ textAlign: 'center' }}>
                                <img src={cart} />

                                <div className="explore-item-text">
                                    カート
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/point">
                        <div className="explore-item">
                            <div style={{ textAlign: 'center' }}>
                                <img src={token} />

                                <div className="explore-item-text">
                                    ポイント
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/favorite">
                        <div className="explore-item">
                            <div style={{ textAlign: 'center' }}>
                                <img src={heart} />

                                <div className="explore-item-text">
                                    お気に入り
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* <div className="explore-item" onClick={() => handleChat()}>
                        <img src={chat} />

                        <div>チャット</div>
                    </div> */}

                    <div className="explore-line"></div>

                    <Link to="/login">
                        <div className={`explore-item ${myData.login}`}>
                            <div style={{ textAlign: 'center' }}>
                                <img src={login} />

                                <div className="explore-item-text">
                                    ログイン
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/register">
                        <div className={`explore-item ${myData.login}`}>
                            <div style={{ textAlign: 'center' }}>
                                <img src={addUser} />

                                <div className="explore-item-text">
                                    新規登録
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/profile">
                        <div className={`explore-item ${myData.logout}`}>
                            <div style={{ textAlign: 'center' }}>
                                <img src={user} />

                                <div className="explore-item-text">
                                    プロフィール
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className={`explore-item ${myData.logout}`} onClick={() => handleLogout()}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={logout} />

                            <div className="explore-item-text">
                                ログアウト
                                <div className="underline" style={{ background: 'white' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
