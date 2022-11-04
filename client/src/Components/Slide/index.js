import flame from '../../Imgs/flame.png'

function Slide() {

    const items = [
        {
            name: '1',
            img: '',
        },
        {
            name: '2',
            img: '',
        },
        {
            name: '',
            img: '',
        },
        {
            name: '',
            img: '',
        },
        {
            name: '',
            img: '',
        },
        {
            name: '',
            img: '',
        },
        {
            name: '',
            img: '',
        },
    ]

    return (
        <div className="slide">
            <div className="slide-title">
                <div className="slide-title-left">
                    <img src={flame} />人気商品
                </div>

                <div className="slide-title-right">
                    もっと見る
                </div>
            </div>

            <div className="slide-container">


                {items.map((item, index) => {
                    return (
                        <div className="slide-container-item" key={index}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Slide;