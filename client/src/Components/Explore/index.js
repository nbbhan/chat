import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import home from '../../Imgs/home.png'
import bell from '../../Imgs/bell.png'
import token from '../../Imgs/token.png'
import cart from '../../Imgs/shopping-cart.png'
import chat from '../../Imgs/chat.png'
import info from '../../Imgs/info.png'
import favor from '../../Imgs/favor.png'
import login from '../../Imgs/login.png'
import logout from '../../Imgs/logout.png'
import addUser from '../../Imgs/addUser.png'

import { Data } from '../../Provider'
import { useAuthDispatch } from '../../context/auth'

function Explore() {
    const myData = useContext(Data)

    const dispatch = useAuthDispatch()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        window.location.reload()
    }

    const handleChat = () => {
        myData.handleChatshow()
    }

    return (
        <div className="explore" style={{ width: `${myData.width}px` }}>
            <div className="explore-items">
                <Link to="/">
                    <div className="explore-item">
                        <img src={home} />

                        <div>ホーム</div>
                    </div>
                </Link>

                <div className="explore-item">
                    <img src={bell} />

                    <div>通知</div>
                </div>

                <div className="explore-item">
                    <img src={cart} />

                    <div>カート</div>
                </div>

                <div className="explore-item" onClick={() => handleChat()}>
                    <img src={chat} />

                    <div>チャット</div>
                </div>

                {/* <div className='explore-item'>
                    <img src={favor} />

                    <div>お気に入り</div>
                </div>

                <div className='explore-item'>
                    <img src={info} />

                    <div>プロフィール</div>
                </div>

                <div className='explore-item'>
                    <img src={token} />

                    <div>ポイント</div>
                </div> */}

                <div className="explore-line"></div>

                <Link to="/login">
                    <div className={`explore-item ${myData.login}`}>
                        <img src={login} />

                        <div>ログイン</div>
                    </div>
                </Link>

                <Link to="/register">
                    <div className={`explore-item ${myData.login}`}>
                        <img src={addUser} />

                        <div>新規登録</div>
                    </div>
                </Link>

                <div className={`explore-item ${myData.logout}`} onClick={() => handleLogout()}>
                    <img src={logout} />

                    <div>ログアウト</div>
                </div>
            </div>
        </div>
    )
}

export default Explore
