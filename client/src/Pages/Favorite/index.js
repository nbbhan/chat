import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

function Favorite() {
    const myData = useContext(Data)

    const inf = {
        link: 'favorite',
        en: 'FAVORITE',
        jp: 'お気に入り',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="favorite">
                <div className="favorite-main">
                    <Title props={inf} />
                </div>
            </div>
        </>
    )
}

export default Favorite
