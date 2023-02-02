import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useContext } from 'react'

import { Data } from '~/Provider'

import BtnLR from '../BtnLR'
import love from '~/Imgs/love.png'
import cart from '~/Imgs/cart.png'
import cart_dark from '~/Imgs/cart_dark.png'

const GET_POPULAR = gql`
    query popular {
        getPopular {
            productId
            price
            info
            imgUrl
            rating
        }
    }
`

const ADD_TO_CART = gql`
    mutation Mutation($productId: String!, $user: String!) {
        addCart(productId: $productId, user: $user) {
            productId
            user
        }
    }
`

function Slide({ name, icon, user }) {
    const { data } = useQuery(GET_POPULAR)

    const myData = useContext(Data)

    const navigate = useNavigate()

    const [variables, setVariables] = useState({
        productId: '',
        user: '',
    })

    let length = data && data.getPopular.length

    const [addToCart] = useMutation(ADD_TO_CART)

    const handleAdd = (area, object) => {
        myData.handleNoti()

        switch (area) {
            case 'favorite':
                console.log('do nothing')
                break
            case 'cart':
                setVariables((prevState) => {
                    return prevState
                })
                setVariables((prevState) => {
                    prevState = {
                        productId: object.productId,
                        user: object.user,
                    }

                    let newPrevState = prevState

                    return newPrevState
                })
                break
        }
    }

    useEffect(() => {
        if (variables.productId != '' && variables.user != '') {
            addToCart({ variables })
        }
    }, [myData.submit])

    useEffect(() => {
        const slider = document.querySelectorAll('.slide-container')

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

    const storage = window.localStorage.getItem('theme')

    return (
        <div className="slide">
            <div className="slide-title">
                <div className="slide-title-left">
                    <img src={icon} />
                    {name}
                </div>

                <div className="slide-title-right">
                    もっと見る
                    <div className="underline"></div>
                </div>
            </div>

            <div className="slide-container">
                <div
                    className="slide-container-main"
                    style={{
                        width: `${length * 500 - 210}px`,
                    }}
                >
                    {data &&
                        data.getPopular.map((item, index, row) => {
                            if (index + 1 === row.length) {
                                return (
                                    <div className="slide-container-item" key={index} style={{ marginRight: '0' }}>
                                        <div className="slide-container-item-img">
                                            <img id="slide-img" src={item.imgUrl} />
                                        </div>

                                        <div className="slide-container-item-info">
                                            <span>{item.info}</span>
                                        </div>

                                        <div className="slide-container-item-price">{`${item.price}円（税込）`}</div>

                                        <div className="slide-container-item-rating">{`☆ ${item.rating} / 5`}</div>

                                        <div className="slide-container-item-btnContainer">
                                            {/* <div
                                                className="slide-container-item-btnContainer-love"
                                                onClick={() => {
                                                    handleAdd('favorite', {
                                                        productId: item.productId,
                                                        user: user && user.getProfile[0].username,
                                                    })
                                                }}
                                            >
                                                <img src={love} />
                                            </div>

                                            <div className="slide-container-item-btnContainer-sen"></div> */}

                                            <div
                                                className="slide-container-item-btnContainer-cart"
                                                id="quan"
                                                onClick={() => {
                                                    handleAdd('cart', {
                                                        productId: item.productId,
                                                        user: user && user.getProfile[0].username,
                                                    })
                                                }}
                                            >
                                                <img src={storage === 'dark' ? cart_dark : cart} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="slide-container-item" key={index}>
                                        <div className="slide-container-item-img">
                                            <img id="slide-img" src={item.imgUrl} />
                                        </div>

                                        <div className="slide-container-item-info">
                                            <span>{item.info}</span>
                                        </div>

                                        <div className="slide-container-item-price">{`${item.price}円（税込）`}</div>

                                        <div className="slide-container-item-rating">{`☆ ${item.rating} / 5`}</div>

                                        <div className={`slide-container-item-btnContainer ${storage}`}>
                                            {/* <div
                                                className="slide-container-item-btnContainer-love"
                                                onClick={() => {
                                                    handleAdd('favorite', {
                                                        productId: item.productId,
                                                        user: user && user.getProfile[0].username,
                                                    })
                                                }}
                                            >
                                                <img src={love} />
                                            </div>

                                            <div className="slide-container-item-btnContainer-sen"></div> */}

                                            <div
                                                className="slide-container-item-btnContainer-cart"
                                                id="quan"
                                                onClick={() => {
                                                    handleAdd('cart', {
                                                        productId: item.productId,
                                                        user: user && user.getProfile[0].username,
                                                    })
                                                }}
                                            >
                                                <img src={storage === 'dark' ? cart_dark : cart} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                </div>
            </div>

            {/* <BtnLR /> */}
        </div>
    )
}

export default Slide
