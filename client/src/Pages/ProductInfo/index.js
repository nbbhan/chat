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
                                <div>
                                    <div>img</div>

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
