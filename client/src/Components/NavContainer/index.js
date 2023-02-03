import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Data } from '~/Provider'

import logoW from '~/Imgs/logoW.png'
import home from '~/Imgs/home.png'
import guide from '~/Imgs/guide.png'
import about from '~/Imgs/about.png'
import contact from '~/Imgs/contact.png'
import setting from '~/Imgs/setting.png'
import post from '~/Imgs/post.png'

function NavContainer() {
    const myData = useContext(Data)

    const handleCM = () => {
        myData.handleCM()
    }

    const handleSM = () => {
        myData.handleSM()
    }

    useEffect(() => {}, [myData.width])

    return (
        <div className="navContainer" style={{ animationName: `${myData.width}` }}>
            <div className="navContainer-main">
                <div className="navContainer-main-items" style={{ animationName: `${myData.nav}` }}>
                    <Link to="/" onClick={() => myData.handleTrigger()}>
                        <div
                            className="navContainer-main-item"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '2rem',
                                transform: 'rotate(10deg)',
                                // border: '1px solid white',
                            }}
                        >
                            <img src={logoW} style={{ width: '80px', height: '80px', marginRight: '2rem' }} alt="" />
                        </div>
                    </Link>

                    <Link to="/" onClick={() => myData.handleTrigger()}>
                        <div className="navContainer-main-item">
                            <img src={home} alt="" />
                            <div className="navContainer-main-item-text">
                                ホーム
                                <div className="underline" style={{ background: 'white' }}></div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/guide" onClick={() => myData.handleTrigger()}>
                        <div className="navContainer-main-item">
                            <img src={guide} alt="" />
                            <div className="navContainer-main-item-text">
                                使い方
                                <div className="underline" style={{ background: 'white' }}></div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/about" onClick={() => myData.handleTrigger()}>
                        <div className="navContainer-main-item">
                            <img src={about} alt="" />
                            <div className="navContainer-main-item-text">
                                QOKSについて
                                <div className="underline" style={{ background: 'white' }}></div>
                            </div>
                        </div>
                    </Link>

                    <div
                        className="navContainer-main-item"
                        onClick={() => {
                            handleCM()
                            myData.handleTrigger()
                        }}
                    >
                        <img src={contact} alt="" />
                        <div className="navContainer-main-item-text">
                            お問い合わせ
                            <div className="underline" style={{ background: 'white' }}></div>
                        </div>
                    </div>

                    <div
                        className="navContainer-main-item"
                        onClick={() => {
                            handleSM()
                            myData.handleTrigger()
                            myData.setSearch('none')
                        }}
                    >
                        <img src={setting} alt="" />
                        <div className="navContainer-main-item-text">
                            設定
                            <div className="underline" style={{ background: 'white' }}></div>
                        </div>
                    </div>

                    <Link to="/post" onClick={() => myData.handleTrigger()}>
                        <div className="navContainer-main-item">
                            <img src={post} alt="" />
                            <div className="navContainer-main-item-text">
                                <div className="navContainer-main-item-text-post">出品</div>
                                <div className="underline" style={{ background: 'yellow' }}></div>
                            </div>
                        </div>
                    </Link>

                    <div className="navContainer-main-item">
                        <div className="navContainer-main-item-search">
                            <input
                                placeholder="商品、都道府県を検索..."
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        myData.setSearch('flex')

                                        myData.setSv(e.target.value)

                                        e.target.value = ''

                                        myData.handleTrigger()
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavContainer
