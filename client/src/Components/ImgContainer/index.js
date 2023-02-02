import long from '~/Imgs/longback.png'
import long_dark from '~/Imgs/longback_dark.png'

function ImgContainer() {
    const storage = window.localStorage.getItem('theme')
    return (
        <div className="img-container">
            <img src={storage === 'dark' ? long_dark : long} />

            <div className="img-text">
                <div className="img-text-main" style={{ transform: 'translateY(22.5%)' }}>
                    話して、楽しむ。
                </div>

                <div className="img-text-main">売って、買って、</div>
            </div>
        </div>
    )
}

export default ImgContainer
