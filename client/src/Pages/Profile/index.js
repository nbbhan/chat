import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'

function Profile() {
    const myData = useContext(Data)

    const inf = {
        link: 'profile',
        en: 'PROFILE',
        jp: 'プロフィール',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    return (
        <>
            <Explore />

            <div className="profile">
                <div className="profile-container">
                    <div className="profile-main">
                        <Title props={inf} />

                        <div className="profile-main-container"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
