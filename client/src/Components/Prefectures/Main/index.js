import { useContext, useEffect } from 'react'

import { Data } from '~/Provider'

import transit from '~/Imgs/transit.png'

function Main() {
    const myData = useContext(Data)

    const handleTransition = (e) => {
        let log

        e.target.nodeName === 'IMG' ? (log = e.target.offsetParent) : (log = e.target)

        console.log(log)
    }

    useEffect(() => {}, [myData.select])

    return (
        <div className="prefectures-container-right-main">
            {myData.prefect.map((item) => {
                switch (myData.select) {
                    case item.name:
                        const html = item.arr.map((item, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <div
                                        className="prefectures-container-right-main-item"
                                        style={{ width: '90%' }}
                                        key={index}
                                    >
                                        <div className="prefectures-container-right-main-item-content">{item}</div>

                                        <div
                                            className="prefectures-container-right-main-item-hover"
                                            onClick={(e) => handleTransition(e)}
                                        >
                                            <img src={transit} />
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div
                                        className="prefectures-container-right-main-item"
                                        style={{ width: '100%' }}
                                        key={index}
                                    >
                                        <div className="prefectures-container-right-main-item-content">{item}</div>

                                        <div
                                            className="prefectures-container-right-main-item-hover"
                                            onClick={(e) => handleTransition(e)}
                                        >
                                            <img src={transit} />
                                        </div>
                                    </div>
                                )
                            }
                        })

                        return html
                    default:
                        break
                }
            })}
        </div>
    )
}

export default Main
