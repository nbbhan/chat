import { gql, useQuery } from '@apollo/client'
import { useContext } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'
import Noti from '~/Components/Noti'
import star from '~/Imgs/star.png'
import star_half from '~/Imgs/star_half.png'
import star_space from '~/Imgs/star_space.png'

const GET_PROFILE = gql`
    query getProfile {
        getProfile {
            username
            profileName
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

    let renderRating

    switch (myData.buy.rating) {
        case '0':
            renderRating = (
                <div>
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '0.1':
        case '0.2':
        case '0.3':
        case '0.4':
        case '0.5':
        case '0.6':
        case '0.7':
        case '0.8':
        case '0.9':
            renderRating = (
                <div>
                    <img src={star_half} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '1':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '1.1':
        case '1.2':
        case '1.3':
        case '1.4':
        case '1.5':
        case '1.6':
        case '1.7':
        case '1.8':
        case '1.9':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star_half} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '2':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '2.1':
        case '2.2':
        case '2.3':
        case '2.4':
        case '2.5':
        case '2.6':
        case '2.7':
        case '2.8':
        case '2.9':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_half} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '3':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_space} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '3.1':
        case '3.2':
        case '3.3':
        case '3.4':
        case '3.5':
        case '3.6':
        case '3.7':
        case '3.8':
        case '3.9':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_half} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '4':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_space} alt="" />
                </div>
            )
            break
        case '4.1':
        case '4.2':
        case '4.3':
        case '4.4':
        case '4.5':
        case '4.6':
        case '4.7':
        case '4.8':
        case '4.9':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_half} alt="" />
                </div>
            )
            break
        case '5':
            renderRating = (
                <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
            )
            break
        default:
            renderRating = <div></div>
            break
    }

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
                                <div className="cart-main-item">
                                    <div className="buy-main-item-container">
                                        <div className="cart-main-item-img">
                                            <img src={myData.buy.imgUrl} alt="" />
                                        </div>

                                        <div className="buy-main-item-inf">
                                            <div className="buy-main-item-inf-container">
                                                <div className="buy-main-item-name">{myData.buy.info}</div>
                                                <div className="buy-main-item-price">{myData.buy.price}円（税込）</div>
                                                <div className="buy-main-item-prefecture">{myData.buy.prefecture}</div>
                                                <div className="buy-main-item-rating">{renderRating}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="prefecture-scroll">
                                        <span>
                                            購入手続き
                                            <div></div>
                                        </span>
                                    </div>

                                    <div>ご購入者：{data && data.getProfile[0].profileName}</div>
                                    <div>お届け先：{data && data.getProfile[0].address}</div>
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
