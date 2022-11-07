import BtnLR from '../BtnLR'

function Slide(props) {
    return (
        <div className="slide">
            <div className="slide-title">
                <div className="slide-title-left">
                    <img src={props.icon} />{props.name}
                </div>

                <div className="slide-title-right">
                    もっと見る
                </div>
            </div>

            <div className="slide-container">
                <div className="slide-container-main">
                    {
                        props.arr && props.arr.map((item, index) => {
                            return (
                                <div className="slide-container-item" key={index}>
                                    <div className='slide-container-item-img'>
                                        <img src={item.img} />
                                    </div>
    
                                    <div className='slide-container-item-info'>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* <BtnLR /> */}
        </div>
    );
}

export default Slide;