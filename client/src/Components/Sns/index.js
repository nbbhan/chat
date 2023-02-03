import face from '~/Imgs/Facebook.png'
import ins from '~/Imgs/Instagram.png'
import tiktok from '~/Imgs/TikTok.png'
import twi from '~/Imgs/Twitter.png'

function Sns() {
    const storage = window.localStorage.getItem('theme')

    return (
        <div className="sns">
            <div className="sns-startline">
                <div></div>
            </div>

            <div className="sns-container">
                <div className="sns-container-left">
                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '0 2rem 2rem 0' }}>
                            <a href="https://facebook.com/share" target="_blank" data-text="QOKS">
                                <div className="sns-item-container">
                                    <div className={`sns-item-container-title ${storage}`}>
                                        <span>#</span>facebook
                                    </div>

                                    <img src={face} alt="" />
                                </div>
                            </a>
                        </div>

                        <div className="sns-item" style={{ padding: '0 0 2rem 2rem' }}>
                            <a href="https://www.instagram.com/accounts/login/" target="_blank" data-text="QOKS">
                                <div className="sns-item-container">
                                    <div className={`sns-item-container-title ${storage}`}>
                                        <span>#</span>instagram
                                    </div>

                                    <img src={ins} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '2rem 2rem 0 0' }}>
                            <a href="https://tiktok.com/login/" target="_blank" data-text="QOKS">
                                <div className="sns-item-container">
                                    <div className={`sns-item-container-title ${storage}`}>
                                        <span>#</span>tiktok
                                    </div>

                                    <img src={tiktok} alt="" />
                                </div>
                            </a>
                        </div>

                        <div className="sns-item" style={{ padding: '2rem 0 0 2rem' }}>
                            <a href="https://twitter.com/share" target="_blank" data-text="QOKS">
                                <div className="sns-item-container">
                                    <div className={`sns-item-container-title ${storage}`}>
                                        <span>#</span>twitter
                                    </div>

                                    <img src={twi} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="sns-container-right">
                    <img src={japan} alt="" />
                </div> */}
            </div>

            <div className="sns-endline">
                <div></div>
            </div>
        </div>
    )
}

export default Sns
