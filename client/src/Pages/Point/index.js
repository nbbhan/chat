import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'

function Point() {
    const myData = useContext(Data)

    return (
        <>
            <Explore />

            <div className="point">
                <div className="point-main"></div>
            </div>
        </>
    )
}

export default Point
