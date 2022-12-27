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
                <div className="point-main">
                    <Title props={inf} />
                </div>
            </div>
        </>
    )
}

export default Point
