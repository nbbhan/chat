import left from '../../Imgs/left.png'
import right from '../../Imgs/right.png'

function BtnLR() {
    return (
        <div className="slide-btn">
            <div className="slide-btn-pre">
                <img src={left} alt="" />
            </div>

            <div className="slide-btn-next">
                <img src={right} alt="" />
            </div>
        </div>
    )
}

export default BtnLR
