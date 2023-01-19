import { gql, useQuery } from '@apollo/client'
import { useContext, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { Data } from '~/Provider'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'

import point from '~/Imgs/point.png'

const GET_PROFILE = gql`
    query getProfile {
        getProfile {
            username
            createdAt
            imageUrl
            buyPoint
            getPoint
        }
    }
`

function Point() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PROFILE)

    const myRef = useRef()

    const inf = {
        link: 'point',
        en: 'POINT',
        jp: 'ポイント',
        des1: '商品を購入時に利用できるポイントです。',
        des2: 'チャージもしくは広告を見て貯めることが出来ます。1 ポイントにつき1 円のレートでご利用いただけます。',
    }

    const historyB = [
        {
            date: '2023/02/06 10:00',
            product: 'たこ焼き',
            used: '600円（税込）',
        },
        {
            date: '2023/01/31 17:06',
            product: '横手焼きそば',
            used: '1300円（税込）',
        },
        {
            date: '2023/01/23 23:40',
            product: 'きびだんご',
            used: '800円（税込）',
        },
        {
            date: '2023/01/23 20:12',
            product: 'カボス',
            used: '1200円（税込）',
        },
        {
            date: '2023/01/19 10:33',
            product: 'お茶',
            used: '270円（税込）',
        },
    ]

    const historyC = [
        {
            date: '2023/01/18 19:30',
            charged: '3000ポイント',
        },
        {
            date: '2023/01/19 17:00',
            charged: '1000ポイント',
        },
        {
            date: '2023/01/31 17:00',
            charged: '1000ポイント',
        },
    ]

    let buyP

    let getP

    if (data) {
        buyP = data.getProfile[0].buyPoint
        getP = data.getProfile[0].getPoint
    }

    let [view, setView] = useState([])

    const handleChangeView = (method) => {
        switch (method) {
            case 'buy':
                setView([...historyB])

                myRef.current.innerHTML = historyB
                    .map((item, index) => {
                        return `
                            <div class="point-main-container-other-items" style="display: block;">
                                <div class="point-main-container-other-item" style="width: 100%; height: 100px;">
                                    <div class="point-main-container-other-item-main" style="display: flex; justify-content: space-between; align-items: center;">
                                        <div style="width: 30%;">${item.product}</div>
                                        <div style="width: 30%; display: flex;">${item.used}</div>
                                        <div style="width: 40%; display: flex; justify-content: flex-end;">${item.date}</div>
                                    </div>    
                                </div>
                            </div>
                        `
                    })
                    .join('')
                break
            case 'charge':
                setView([...historyC])

                myRef.current.innerHTML = historyC
                    .map((item) => {
                        return `
                            <div class="point-main-container-other-items" style="display: block;">
                                <div class="point-main-container-other-item" style="width: 100%; height: 100px;">
                                    <div class="point-main-container-other-item-main" style="display: flex; justify-content: space-between; align-items: center;">
                                        <div style="width: 50%; display: flex;">${item.charged}</div>
                                        <div style="width: 50%; display: flex; justify-content: flex-end;">${item.date}</div>
                                    </div>    
                                </div>
                            </div>
                        `
                    })
                    .join('')
                break
        }
    }

    useEffect(() => {}, [view])

    return (
        <>
            <Explore />

            <div className="point">
                <div className="point-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <div className="point-main">
                        <Title props={inf} />

                        <div className="point-main-container">
                            <div className="point-main-container-items">
                                <div className="point-main-container-total">
                                    <div className="point-main-container-number">
                                        <img src={point} />
                                        {`${buyP + getP}`}
                                    </div>
                                </div>

                                <div className="point-main-container-breakdown">
                                    <div className="point-main-container-breakdown-items">
                                        <div className="point-main-container-breakdown-item">
                                            <div className="point-main-container-breakdown-text">購入したポイント:</div>
                                            <div className="point-main-container-breakdown-num">{buyP}</div>
                                        </div>

                                        <div className="point-main-container-line"></div>

                                        <div className="point-main-container-breakdown-item">
                                            <div className="point-main-container-breakdown-text">無料ポイント:</div>
                                            <div className="point-main-container-breakdown-num">{getP}</div>
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

                                <div className="point-main-container-other" ref={myRef}>
                                    <div className="point-main-container-other-items">
                                        <div
                                            className="point-main-container-other-item"
                                            onClick={() => {
                                                handleChangeView('buy')
                                            }}
                                        >
                                            <div className="point-main-container-other-item-main">
                                                <div className="point-main-container-other-item-main-text">
                                                    購入履歴
                                                    <div className="underline"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="point-main-container-other-item"
                                            onClick={() => {
                                                handleChangeView('charge')
                                            }}
                                        >
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

                                    {/* ------------------------------------------- */}
                                    <div></div>
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
