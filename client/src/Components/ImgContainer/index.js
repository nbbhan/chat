import long from '~/Imgs/longback.png'

function ImgContainer() {
    return (
        <div className="img-container">
            <img src={long} />

            <div className="img-text">
                <div className="img-text-main" style={{ transform: 'translateY(15%)' }}>
                    しゃべって、楽しむ。
                </div>

                <div className="img-text-main">売って、買って、</div>
            </div>
        </div>
    )
}

export default ImgContainer
