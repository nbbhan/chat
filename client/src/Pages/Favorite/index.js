import { gql, useQuery } from '@apollo/client'
import { useContext, useState, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import FavoriteItem from '~/Components/FavoriteItem'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'
import Noti from '~/Components/Noti'

const GET_FAVORITE = gql`
    query getFavorite {
        getFavorite {
            productId
        }
    }
`

function Favorite() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_FAVORITE)

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
                <div className="favorite-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <Noti />

                    <div className="favorite-main">
                        <Title props={inf} />

                        <div className="favorite-main-container">
                            <div className="favorite-main-items">
                                {data &&
                                    data.getFavorite.map((item, index) => {
                                        return <FavoriteItem item={item} key={index} />
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favorite
