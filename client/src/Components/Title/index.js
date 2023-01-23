import { Link } from 'react-router-dom'

import right from '~/Imgs/breadRight.png'
import right_dark from '~/Imgs/breadRight_dark.png'

function Title({ props }) {
    const storage = window.localStorage.getItem('theme')

    return (
        <>
            <div className="title">
                <div className="title-bread">
                    <Link to="/">
                        <div>ホーム</div>
                    </Link>

                    <div className="title-space">
                        <img src={storage === 'dark' ? right_dark : right} />
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
