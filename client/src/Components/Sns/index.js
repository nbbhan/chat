import social from '~/Imgs/social.png'
import face from '~/Imgs/Facebook.png'
import ins from '~/Imgs/Instagram.png'
import tiktok from '~/Imgs/TikTok.png'
import twi from '~/Imgs/Twitter.png'

function Sns() {
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
                                    <div className="sns-item-container-title">
                                        <span>#</span>facebook
                                    </div>

                                    <img src={face} />
                                </div>
                            </a>
                        </div>

                        <div className="sns-item" style={{ padding: '0 0 2rem 2rem' }}>
                            <div className="sns-item-container">
                                <div className="sns-item-container-title">
                                    <span>#</span>instagram
                                </div>

                                <a href="https://instagram.com/p" data-text="QOKS">
                                    <img src={ins} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '2rem 2rem 0 0' }}>
                            <div className="sns-item-container">
                                <div className="sns-item-container-title">
                                    <span>#</span>tiktok
                                </div>

                                <a href="https://tiktok.com/share" data-text="QOKS">
                                    <img src={tiktok} />
                                </a>
                            </div>
                        </div>

                        <div className="sns-item" style={{ padding: '2rem 0 0 2rem' }}>
                            <div className="sns-item-container">
                                <div className="sns-item-container-title">
                                    <span>#</span>twitter
                                </div>

                                <a href="https://twitter.com/share" data-text="QOKS">
                                    <img src={twi} />
                                </a>
                            </div>
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
