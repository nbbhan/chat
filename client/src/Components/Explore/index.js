import { useContext } from 'react'
import { Link } from 'react-router-dom'

import home from '~/Imgs/home.png'
import token from '~/Imgs/token.png'
import cart from '~/Imgs/shopping-cart.png'
import login from '~/Imgs/login.png'
import logout from '~/Imgs/logout.png'
import addUser from '~/Imgs/addUser.png'
import user from '~/Imgs/user.png'
import logoW from '~/Imgs/logoW.png'

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

    return (
        <div className="explore">
            <div className="explore-items">
                <div className="explore-items-main">
                    <a href="/">
                        <div className="explore-item">
                            <img
                                src={logoW}
                                alt=""
                                style={{ width: '80px', height: '80px', transform: 'rotate(10deg)' }}
                            />
                        </div>
                    </a>

                    <Link to="/">
                        <div className="explore-item">
                            <div style={{ textAlign: 'center' }}>
                                <img src={home} alt="" />

                                <div className="explore-item-text">
                                    ホーム
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <a href="/cart">
                        <div className="explore-item">
                            <div style={{ textAlign: 'center' }}>
                                <img src={cart} alt="" />

                                <div className="explore-item-text">
                                    カート
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <Link to="/point">
                        <div className="explore-item">
                            <div style={{ textAlign: 'center' }}>
                                <img src={token} alt="" />

                                <div className="explore-item-text">
                                    ポイント
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* <Link to="/favorite">
                        <div className="explore-item">
                            <div style={{ textAlign: 'center' }}>
                                <img src={heart} />

                                <div className="explore-item-text">
                                    お気に入り
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link> */}

                    <div className="explore-line"></div>

                    <Link to="/login">
                        <div className={`explore-item ${myData.login}`}>
                            <div style={{ textAlign: 'center' }}>
                                <img src={login} alt="" />

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
                                <img src={addUser} alt="" />

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
                                <img src={user} alt="" />

                                <div className="explore-item-text">
                                    プロフィール
                                    <div className="underline" style={{ background: 'white' }}></div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className={`explore-item ${myData.logout}`} onClick={() => handleLogout()}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={logout} alt="" />

                            <div className="explore-item-text">
                                ログアウト
                                <div className="underline" style={{ background: 'white' }}></div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="explore-item"
                        style={{ fontSize: '12px', color: 'var(--myColor)', cursor: 'default' }}
                    >
                        © 2023 Qoks inc. All Right Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
