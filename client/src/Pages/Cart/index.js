import { gql, useQuery } from '@apollo/client'
import { useContext } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import CartItem from '~/Components/CartItem'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'
import Noti from '~/Components/Noti'

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
        des1: 'ご購入希望の商品を一時的に保存する機能です。',
        des2: 'ご注文が完了するまでは、お客様の商品は確保されませんので、購入手続きの操作中に商品売り切れとなることがございます。',
    }

    const storage = window.localStorage.getItem('theme')

    return (
        <>
            <Explore />

            <div className="cart">
                <div className="cart-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <Noti />

                    <div className={`cart-main ${storage}`}>
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
