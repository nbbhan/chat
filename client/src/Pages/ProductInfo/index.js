import { useContext } from 'react'
import { gql, useQuery } from '@apollo/client'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

import { Data } from '../../Provider'

function ProductInfo() {
    const myData = useContext(Data)

    const inf = {
        link: 'pi',
        en: 'Product Information',
        jp: '商品情報',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="productInfo">
                <div className="productInfo-container">
                    <div className="productInfo-main">
                        <Title props={inf} />

                        <div className="productInfo-main-container">
                            <div className="productInfo-main-container-items">
                                <div className="productInfo-main-container-item">
                                    <div className="productInfo-main-container-item-img">
                                        <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                    </div>

                                    <div>info</div>
                                </div>

                                <div>btn group</div>

                                <div>related</div>

                                <div>review</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo
