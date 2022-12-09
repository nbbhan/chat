import { useContext, useEffect, useState } from 'react'

import { Data } from '~/Provider'

import prefectures1 from '~/Imgs/prefectures-1.png'
import prefectures2 from '~/Imgs/prefectures-2.png'

import Items from './Items'
import Main from './Main'

function Prefectures() {
    const myData = useContext(Data)

    let x

    const imgArr = [
        // 北海道
        prefectures1,
        // 四国
        prefectures2,
    ]

    const handleSelectValue = (e) => {
        myData.handleSelect(e.target.value)
    }

    switch (myData.select) {
        case '北海道・東北':
            x = 0
            break
        case '四国':
            x = 1
            break
        default:
            break
    }

    useEffect(() => {}, [myData.select])

    return (
        <div className="prefectures">
            <Items />

            <div className="prefectures-container">
                <div className="prefectures-container-left">
                    <img src={imgArr[x]} />
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
        </div>
    )
}

export default Prefectures
