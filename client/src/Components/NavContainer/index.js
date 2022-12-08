import { useContext, useEffect } from 'react'

import { Data } from '~/Provider'

function NavContainer() {
    const myData = useContext(Data)

    useEffect(() => {}, [myData.width])

    return (
        <div className="navContainer" style={{ animationName: `${myData.width}` }}>
            <div className="navContainer-main"></div>
        </div>
    )
}

export default NavContainer
