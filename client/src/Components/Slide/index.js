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
            name: '3',
            img: '',
        },
        {
            name: '4',
            img: '',
        },
        {
            name: '5',
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
                            <div className='slide-container-item-name'>
                                {item.name}
                            </div>
                            
                            <div className='slide-container-item-img'>
                                <img src={item.img} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Slide;