import social from '~/Imgs/social.png'
import face from '~/Imgs/Facebook.png'
import ins from '~/Imgs/Instagram.png'
import tiktok from '~/Imgs/TikTok.png'
import twi from '~/Imgs/Twitter.png'

function Sns() {
    const storage = window.localStorage.getItem('theme')

    return (
        <div className="sns">
            {/* <div className="sns-title">
                <img src={social} />
                <span>ソーシャルメディア</span>
            </div> */}

            <div className="sns-startline">
                <div></div>
            </div>

            <div className="sns-container">
                <div className="sns-container-left">
                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '0 2rem 2rem 0' }}>
                            <a href="https://facebook.com/share" data-text="QOKS">
                                <div className="sns-item-container">
                                    <div className={`sns-item-container-title ${storage}`}>
                                        <span>#</span>facebook
                                    </div>

                                    <img src={face} />
                                </div>
                            </a>
                        </div>

                        <div className="sns-item" style={{ padding: '0 0 2rem 2rem' }}>
                            <a href="https://instagram.com/p" data-text="QOKS">
                                <div className="sns-item-container">
                                    <div className={`sns-item-container-title ${storage}`}>
                                        <span>#</span>instagram
                                    </div>

                                    <img src={ins} />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '2rem 2rem 0 0' }}>
                            <a href="https://tiktok.com/share" data-text="QOKS">
                                <div className="sns-item-container">
                                    <div className={`sns-item-container-title ${storage}`}>
                                        <span>#</span>tiktok
                                    </div>

                                    <img src={tiktok} />
                                </div>
                            </a>
                        </div>

                        <div className="sns-item" style={{ padding: '2rem 0 0 2rem' }}>
                            <a href="https://twitter.com/share" data-text="QOKS">
                                <div className="sns-item-container">
                                    <div className={`sns-item-container-title ${storage}`}>
                                        <span>#</span>twitter
                                    </div>

                                    <img src={twi} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="sns-container-right">
                    <img src={japan} />
                </div> */}
            </div>

            <div className="sns-endline">
                <div></div>
            </div>
        </div>
    )
}

export default Sns
