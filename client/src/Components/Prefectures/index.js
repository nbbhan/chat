import { useContext, useEffect, useState } from 'react'

import { Data } from '~/Provider'

import prefectures1 from '~/Imgs/prefectures-1.png'
import prefectures2 from '~/Imgs/prefectures-2.png'
import prefectures3 from '~/Imgs/prefectures-3.png'
import prefectures4 from '~/Imgs/prefectures-4.png'
import prefectures5 from '~/Imgs/prefectures-5.png'
import prefectures6 from '~/Imgs/prefectures-6.png'
import prefectures7 from '~/Imgs/prefectures-7.png'
import prefectures8 from '~/Imgs/prefectures-8.png'

import Items from './Items'
import Main from './Main'
import Container from './Container'

function Prefectures() {
    const myData = useContext(Data)

    let x

    const imgArr = [
        // 日本
        prefectures1,
        // 四国
        prefectures2,
        //　北海道
        prefectures3,
        // 中国
        prefectures4,
        // 九州
        prefectures5,
        // 近畿
        prefectures6,
        // 中部
        prefectures7,
        //関東
        prefectures8,
    ]

    const handleSelectValue = (e) => {
        myData.handleSelect(e.target.value)

        myData.handleAni()
    }

    switch (myData.select) {
        case '四国':
            x = 1
            break
        case '北海道・東北':
            x = 2
            break
        case '中国':
            x = 3
            break
        case '九州':
            x = 4
            break
        case '近畿':
            x = 5
            break
        case '中部':
            x = 6
            break
        case '関東':
            x = 7
            break
        default:
            x = 0
            break
    }

    useEffect(() => {}, [myData.select])

    return (
        <div className="prefectures">
            <Items />

            <div className="prefectures-container">
                <div className="prefectures-container-left">
                    <img src={imgArr[x]} style={{ animationName: `${myData.ani}` }} />
                </div>

                <div className="prefectures-container-right">
                    <div className="prefectures-container-right-select">
                        <div className="prefectures-container-right-select-L">
                            <select
                                onChange={(e) => {
                                    handleSelectValue(e)
                                }}
                            >
                                {myData.region.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="prefectures-container-right-select-R">{myData.select}</div>

                        <div className="prefectures-container-right-select-line">
                            <div className="prefectures-container-right-select-line-main"></div>
                        </div>
                    </div>

                    <Main />
                </div>
            </div>

            <Container />
        </div>
    )
}

export default Prefectures
