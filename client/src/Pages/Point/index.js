import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

    const pointNum = {
        buy: 4000,
        get: 1000,
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
                                <div className="point-main-container-total">
                                    <div className="point-main-container-number">
                                        <img src={point} />
                                        {`${pointNum.buy + pointNum.get}`}
                                    </div>
                                </div>

                                <div className="point-main-container-breakdown">
                                    <div className="point-main-container-breakdown-items">
                                        <div className="point-main-container-breakdown-item">
                                            <div className="point-main-container-breakdown-text">購入したポイント:</div>
                                            <div className="point-main-container-breakdown-num">{pointNum.buy}</div>
                                        </div>

                                        <div className="point-main-container-line"></div>

                                        <div className="point-main-container-breakdown-item">
                                            <div className="point-main-container-breakdown-text">無料ポイント:</div>
                                            <div className="point-main-container-breakdown-num">{pointNum.get}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="point-main-container-btns">
                                    <div className="point-main-container-btns-items">
                                        <div className="point-main-container-btns-item">
                                            <div className="point-main-container-btns-text">ポイント購入</div>
                                        </div>

                                        {/* <div className="point-main-container-line"></div> */}

                                        <div className="point-main-container-btns-item">
                                            <div className="point-main-container-btns-text">ポイントGET</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="point-main-container-other">
                                    <div className="point-main-container-other-items">
                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    購入履歴
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    チャージ履歴
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="point-main-container-other-items">
                                        <div className="point-main-container-other-item">
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    使い方
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

export default Point
