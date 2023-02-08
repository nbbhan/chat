import { gql, useQuery } from '@apollo/client'
import { useContext } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'
import Noti from '~/Components/Noti'

const GET_PROFILE = gql`
    query getProfile {
        getProfile {
            username
            address
        }
    }
`

function Buy() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PROFILE)

    const inf = {
        link: 'buy',
        en: 'BUY',
        jp: '購入',
        des1: 'ご購入希望の商品を購入する機能です。',
        des2: 'ご注文が完了するまでは、お客様の商品は確保されませんので、購入手続きの操作中に商品売り切れとなることがございます。',
    }

    const storage = window.localStorage.getItem('theme')

    return (
        <>
            <Explore />

            <div className="buy">
                <div className="buy-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <Noti />

                    <div className={`buy-main ${storage}`}>
                        <Title props={inf} />

                        <div className="buy-main-container">
                            <div className="buy-main-items">
                                <div className="buy-main-item">
                                    <img src={myData.buy.imgUrl} />
                                </div>
                                <div className="buy-main-item">
                                    <div className="buy-main-item-price">{myData.buy.price}</div>
                                </div>
                                <div className="buy-main-item">
                                    <div className="buy-main-item-info">{myData.buy.info}</div>
                                </div>
                                <div className="buy-main-item">
                                    <div className="buy-main-item-productId">{myData.buy.productId}</div>
                                </div>
                                <div className="buy-main-item">
                                    <div className="buy-main-item-prefecture">{myData.buy.prefecture}</div>
                                </div>
                                <div className="buy-main-item">
                                    <div className="buy-main-item-username">{data && data.getProfile[0].username}</div>
                                </div>
                                <div className="buy-main-item">
                                    <div className="buy-main-item-address">{data && data.getProfile[0].address}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy
