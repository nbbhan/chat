import { useContext, useEffect } from 'react'

import { Data } from '~/Provider'

import eye from '~/Imgs/eye.png'
import transit2 from '~/Imgs/transit2.png'

function Main() {
    const myData = useContext(Data)

    const handleTransition = (e) => {
        let log

        e.target.nodeName === 'IMG' ? (log = e.target.offsetParent) : (log = e.target)

        let data = log.attributes.data.value

        myData.getProductData(data)
    }

    useEffect(() => {
        handleTransition(e)
    }, [myData.product])

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
                                        style={{ width: 'calc(100% - 2rem)' }}
                                        key={index}
                                    >
                                        <div className="prefectures-container-right-main-item-content">
                                            <div>{item}</div>

                                            <img src={transit2} />
                                        </div>

                                        <div
                                            data={item}
                                            className="prefectures-container-right-main-item-hover"
                                            onClick={(e) => handleTransition(e)}
                                        >
                                            <img src={eye} />
                                            &nbsp; 詳しく見る
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
                                        <div className="prefectures-container-right-main-item-content">
                                            <div>{item}</div>

                                            <img src={transit2} />
                                        </div>

                                        <div
                                            data={item}
                                            className="prefectures-container-right-main-item-hover"
                                            onClick={(e) => handleTransition(e)}
                                        >
                                            <img src={eye} />
                                            &nbsp; 詳しく見る
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
