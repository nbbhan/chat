import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'

function Cart() {
    const myData = useContext(Data)

    return (
        <>
            <Explore />

            <div className="cart">
                <div className="cart-main"></div>
            </div>
        </>
    )
}

export default Cart
