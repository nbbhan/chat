import { gql, useQuery } from '@apollo/client'
import { useContext, useEffect } from 'react'

import { Data } from '~/Provider'

import cart from '~/Imgs/cart.png'

const GET_PRODUCT = gql`
    query getProduct {
        getProduct {
            imgUrl
            price
            info
            productId
            rating
            area
            prefecture
        }
    }
`

function Container() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PRODUCT)

    useEffect(() => {}, [myData.product])

    useEffect(() => {
        const slider = document.querySelectorAll('.prefectures-itemsContainer')

        slider.forEach((item) => {
            let isDown = false
            let startX
            let scrollLeft

            item.addEventListener('mousedown', (e) => {
                isDown = true
                item.classList.add('active')
                startX = e.pageX - item.offsetLeft
                scrollLeft = item.scrollLeft
            })
            item.addEventListener('mouseleave', () => {
                isDown = false
                item.classList.remove('active')
            })
            item.addEventListener('mouseup', () => {
                isDown = false
                item.classList.remove('active')
            })
            item.addEventListener('mousemove', (e) => {
                if (!isDown) return
                e.preventDefault()
                const x = e.pageX - item.offsetLeft
                const walk = (x - startX) * 2
                item.scrollLeft = scrollLeft - walk
            })
        })
    })

    let length = 4

    return (
        <div className="prefectures-itemsContainer">
            <div
                className="prefectures-itemsContainer-items"
                style={{
                    width: `${length * 500}px`,
                }}
            >
                {data &&
                    data.getProduct.map((item, index, row) => {
                        if (item.prefecture === myData.product) {
                            if (index + 1 === row.length) {
                                return (
                                    <div className="prefecture-container-item" key={index} style={{ marginRight: '0' }}>
                                        <div className="prefecture-container-item-img">
                                            <img id="prefecture-img" src={item.imgUrl} />
                                        </div>

                                        <div className="prefecture-container-item-info">
                                            <span>{item.info}</span>
                                        </div>

                                        <div className="prefecture-container-item-price">{`${item.price}円（税込）`}</div>

                                        <div className="prefecture-container-item-rating">{`${item.rating}`}</div>

                                        <div className="prefecture-container-item-btnContainer">
                                            {/* <div
                                                className="prefecture-container-item-btnContainer-love"
                                                onClick={() => {
                                                    handleAdd('favorite', {
                                                        productId: item.productId,
                                                        user: user && user.getProfile[0].username,
                                                    })
                                                }}
                                            >
                                                <img src={love} />
                                            </div>

                                            <div className="prefecture-container-item-btnContainer-sen"></div> */}

                                            <div
                                                className="prefecture-container-item-btnContainer-cart"
                                                id="quan"
                                                // onClick={() => {
                                                //     handleAdd('cart', {
                                                //         productId: item.productId,
                                                //         user: user && user.getProfile[0].username,
                                                //     })
                                                // }}
                                            >
                                                <img src={cart} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="prefecture-container-item" key={index}>
                                        <div className="prefecture-container-item-img">
                                            <img id="prefecture-img" src={item.imgUrl} />
                                        </div>

                                        <div className="prefecture-container-item-info">
                                            <span>{item.info}</span>
                                        </div>

                                        <div className="prefecture-container-item-price">{`${item.price}円（税込）`}</div>

                                        <div className="prefecture-container-item-rating">{`${item.rating}`}</div>

                                        <div className="prefecture-container-item-btnContainer">
                                            {/* <div
                                                className="prefecture-container-item-btnContainer-love"
                                                onClick={() => {
                                                    handleAdd('favorite', {
                                                        productId: item.productId,
                                                        user: user && user.getProfile[0].username,
                                                    })
                                                }}
                                            >
                                                <img src={love} />
                                            </div>

                                            <div className="prefecture-container-item-btnContainer-sen"></div> */}

                                            <div
                                                className="prefecture-container-item-btnContainer-cart"
                                                id="quan"
                                                // onClick={() => {
                                                //     handleAdd('cart', {
                                                //         productId: item.productId,
                                                //         user: user && user.getProfile[0].username,
                                                //     })
                                                // }}
                                            >
                                                <img src={cart} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    })}
            </div>
        </div>
    )
}

export default Container
