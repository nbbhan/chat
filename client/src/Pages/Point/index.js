import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

import point from '~/Imgs/point.png'

function Point() {
    const myData = useContext(Data)

    const inf = {
        link: 'point',
        en: 'POINT',
        jp: 'ポイント',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    const now = 500

    return (
        <>
            <Explore />

            <div className="point">
                <div className="point-container">
                    <div className="point-main">
                        <Title props={inf} />

                        <div className="point-main-container">
                            <div className="point-main-container-items">
                                <div className="point-main-container-total">
                                    <span className="point-main-container-text">ポイント数:</span>
                                    <span className="point-main-container-number">{`${now}`}</span>
                                </div>

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
