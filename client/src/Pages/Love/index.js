import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'

function Love() {
    const myData = useContext(Data)

    return (
        <>
            <Explore />

            <div className="love">
                <div className="love-main"></div>
            </div>
        </>
    )
}

export default Love
