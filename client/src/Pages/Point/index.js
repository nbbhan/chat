import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

function Point() {
    const myData = useContext(Data)

    const inf = {
        link: 'point',
        en: 'POINT',
        jp: 'ポイント',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="point">
                <div className="point-container">
                    <div className="point-main">
                        <Title props={inf} />

                        <div className="point-main-container">
                            <div className="point-main-container-items">
                                <div className="point-main-container-total">500</div>

                                <div className="point-main-container-breakdown">
                                    <div className="point-main-container-buy">100</div>

                                    <div className="point-main-container-bonus">400</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Point
