import { Link } from 'react-router-dom'

import right from '~/Imgs/breadRight.png'

function Title({ props }) {
    return (
        <>
            <div className="title">
                <div className="title-bread">
                    <Link to="/">
                        <div>ホーム</div>
                    </Link>

                    <div className="title-space">
                        <img src={right} />
                    </div>

                    <div className="title-now">{props.jp}</div>
                </div>

                <div className="title-text">
                    <div className="title-text-main">
                        {props.en}

                        <div className="title-text-deputy">{props.jp}</div>
                    </div>

                    <div>
                        {props.des1}
                        <br />
                        {props.des2}
                    </div>

                    <div className="title-line">
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title
