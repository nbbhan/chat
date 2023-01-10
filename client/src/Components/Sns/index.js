import social from '~/Imgs/social.png'
import japan from '~/Imgs/3.png'

function Sns() {
    return (
        <div className="sns">
            <div className="sns-title">
                <span>ソーシャルメディア</span>
                <img src={social} />
            </div>

            <div className="sns-container">
                <div className="sns-container-left">
                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '0 1rem 1rem 0' }}>
                            <div className="sns-item-container"></div>
                        </div>

                        <div className="sns-item" style={{ padding: '0 0 1rem 1rem' }}>
                            <div className="sns-item-container"></div>
                        </div>
                    </div>

                    <div className="sns-items">
                        <div className="sns-item" style={{ padding: '1rem 1rem 0 0' }}>
                            <div className="sns-item-container"></div>
                        </div>

                        <div className="sns-item" style={{ padding: '1rem 0 0 1rem' }}>
                            <div className="sns-item-container"></div>
                        </div>
                    </div>
                </div>

                <div className="sns-container-right">
                    <img src={japan} />
                </div>
            </div>
        </div>
    )
}

export default Sns
