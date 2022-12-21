import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

function Cart() {
    const myData = useContext(Data)

    const inf = {
        pagename: 'Cart',
        jpname: 'カート',
        link: 'cart',
    }

    return (
        <>
            <Explore />

            <div className="cart">
                <div className="cart-main">
                    <Title props={inf} />
                </div>
            </div>
        </>
    )
}

export default Cart
