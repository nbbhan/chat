import { gql, useQuery } from '@apollo/client'
import { useContext, useEffect } from 'react'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'
import ProfileModal from '~/Components/ProfileModal'
import Noti from '~/Components/Noti'

const GET_PROFILE = gql`
    query getProfile {
        getProfile {
            username
            createdAt
            imageUrl
            buyPoint
            getPoint
            follow
            address
            profileName
        }
    }
`

function Profile() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PROFILE)

    const inf = {
        link: 'profile',
        en: 'PROFILE',
        jp: 'プロフィール',
        des1: '気軽に立ち寄って自由にすごせるのがロゴスランドの魅力。',
        des2: 'そこで「たべる」「あそぶ」「とまる」「かりる」の4つのカテゴリーにわけて園内をご紹介します。',
    }

    const handleChangeProfile = () => {
        myData.handlePM()
    }

    const handleCM = () => {
        myData.handleCM()
    }

    useEffect(() => {}, [myData.pm])

    const storage = window.localStorage.getItem('theme')

    return (
        <>
            <Explore />

            <div className="profile">
                <div className="profile-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <ProfileModal />

                    <Noti />

                    <div className={`profile-main ${storage}`}>
                        <Title props={inf} />

                        <div className="profile-main-container">
                            <div className="profile-main-container-items">
                                <div className="profile-main-container-profimg">
                                    <div>
                                        <img src={data && data.getProfile[0].imageUrl} alt="" />
                                    </div>
                                </div>

                                <div className="profile-main-container-name">
                                    {data && data.getProfile[0].profileName}
                                </div>

                                <div className="profile-main-container-breakdown">
                                    <div className="profile-main-container-breakdown-items">
                                        <div className="profile-main-container-breakdown-item">
                                            <div className="profile-main-container-breakdown-text">ID:</div>
                                            <div className="profile-main-container-breakdown-num">
                                                {data && data.getProfile[0].username}
                                            </div>
                                        </div>

                                        <div className="profile-main-container-line"></div>

                                        <div className="profile-main-container-breakdown-item">
                                            <div className="profile-main-container-breakdown-text">住所:</div>
                                            <div className="profile-main-container-breakdown-num">
                                                {data && data.getProfile[0].address}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-main-container-other">
                                    <div className="profile-main-container-other-items">
                                        <div
                                            className="profile-main-container-other-item"
                                            onClick={() => {
                                                handleChangeProfile()
                                            }}
                                        >
                                            <div className="profile-main-container-other-item-main">
                                                <div className="profile-main-container-other-item-main-text">
                                                    プロフィールを編集
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="profile-main-container-other-item">
                                            <div className="profile-main-container-other-item-main">
                                                <div className="profile-main-container-other-item-main-text">
                                                    パスワードを変更
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="profile-main-container-other-items">
                                        <div className="profile-main-container-other-item">
                                            <div className="profile-main-container-other-item-main">
                                                <div className="profile-main-container-other-item-main-text">
                                                    フォローを管理
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-main-container-other-item">
                                            <div
                                                className="profile-main-container-other-item-main"
                                                onClick={() => {
                                                    handleCM()
                                                }}
                                            >
                                                <div className="profile-main-container-other-item-main-text">
                                                    お問い合わせ
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="profile-main-container-other-items">
                                        <div className="profile-main-container-other-item">
                                            <div className="profile-main-container-other-item-main">
                                                <div className="profile-main-container-other-item-main-text">
                                                    プライバシーポリシー
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="profile-main-container-other-item">
                                            <div className="profile-main-container-other-item-main">
                                                <div className="profile-main-container-other-item-main-text">
                                                    利用規約
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
