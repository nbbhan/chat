import social from '~/Imgs/social.png'
import japan from '~/Imgs/3.png'

function Sns() {
    return (
        <div className="sns">
            <div className="sns-startline">
                <div></div>
            </div>

            {/* <div className="sns-title">
                <img src={social} style={{ transform: 'rotate(-15deg)' }} />
                <span>ソーシャルメディア</span>
                <img src={social} style={{ transform: 'rotate(15deg)' }} />
            </div> */}

            <div className="sns-container">
                <div className="sns-container-left">
                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '0 2rem 2rem 0' }}>
                            <div className="sns-item-container">
                                <div className="sns-item-container-title">
                                    <span>#</span>facebook
                                </div>

                                {/* <img src={japan} /> */}
                            </div>
                        </div>

                        <div className="sns-item" style={{ padding: '0 0 2rem 2rem' }}>
                            <div className="sns-item-container">
                                <div className="sns-item-container-title">
                                    <span>#</span>instagram
                                </div>

                                {/* <img src={japan} /> */}
                            </div>
                        </div>
                    </div>

                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '2rem 2rem 0 0' }}>
                            <div className="sns-item-container">
                                <div className="sns-item-container-title">
                                    <span>#</span>twitter
                                </div>

                                {/* <img src={japan} /> */}
                            </div>
                        </div>

                        <div className="sns-item" style={{ padding: '2rem 0 0 2rem' }}>
                            <div className="sns-item-container">
                                <div className="sns-item-container-title">
                                    <span>#</span>tiktok
                                </div>

                                {/* <img src={japan} /> */}
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
