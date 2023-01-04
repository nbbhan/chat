import { gql, useQuery } from '@apollo/client'
import { useContext } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import CartItem from '~/Components/CartItem'

const GET_CART = gql`
    query getCart {
        getCart {
            productId
        }
    }
`

function Cart() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_CART)

    const inf = {
        link: 'cart',
        en: 'CART',
        jp: 'カート',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="cart">
                <div className="cart-container">
                    <div className="cart-main">
                        <Title props={inf} />

                        <div className="cart-main-container">
                            <div className="cart-main-items">
                                {data &&
                                    data.getCart.map((item, index) => {
                                        return <CartItem item={item} key={index} />
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
