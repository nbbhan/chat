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

                        <div className="profile-main-container">
                            <div className="profile-main-container-items">
                                <div className="profile-main-container-profimg">
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80" />
                                    </div>
                                </div>

                                <div className="profile-main-container-name">john</div>

                                <div className="point-main-container-breakdown">
                                    <div className="point-main-container-breakdown-items">
                                        <div className="point-main-container-breakdown-item">
                                            <div className="point-main-container-breakdown-text">フォロー中:</div>
                                            <div className="point-main-container-breakdown-num">5 </div>
                                        </div>

                                        <div className="point-main-container-line"></div>

                                        <div className="point-main-container-breakdown-item">
                                            <div className="point-main-container-breakdown-text">登録日:</div>
                                            <div className="point-main-container-breakdown-num">2022/12/30</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="point-main-container-other">
                                    <div className="point-main-container-other-items">
                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    プロフィールを編集
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    パスワードを変更
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="point-main-container-other-items">
                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    フォローを管理
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    FAQ・お問い合わせ
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="point-main-container-other-items">
                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    プライバシーポリシー
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
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
