import { Link } from 'react-router-dom'

function Title({ props }) {
    return (
        <>
            <div className="title">
                <div className="title-bread">
                    <Link to="/">
                        <div>Home</div>
                    </Link>

                    <div>-</div>

                    <Link to={`/${props.link}`}>
                        <div>{props.pagename}</div>
                    </Link>
                </div>

                <div className="title-text">
                    {props.pagename}

                    <div className="title-text-jp">{props.jpname}</div>
                </div>
            </div>
        </>
    )
}

export default Title
