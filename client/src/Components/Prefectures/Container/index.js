import { gql, useQuery, useMutation } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'

import { Data } from '~/Provider'

import cart from '~/Imgs/cart.png'
import cart_dark from '~/Imgs/cart_dark.png'

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

const ADD_TO_CART = gql`
    mutation Mutation($productId: String!, $user: String!) {
        addCart(productId: $productId, user: $user) {
            productId
            user
        }
    }
`

function Container({ user }) {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PRODUCT)

    const [addToCart] = useMutation(ADD_TO_CART)

    const [variables, setVariables] = useState({
        productId: '',
        user: '',
    })

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

    useEffect(() => {
        if (variables.productId != '' && variables.user != '') {
            addToCart({ variables })
        }
    }, [myData.submit])

    const storage = window.localStorage.getItem('theme')

    return (
        <div className="prefectures-itemsContainer">
            <div className="prefectures-itemsContainer-items">
                {data &&
                    data.getProduct.map((item, index) => {
                        if (item.prefecture === myData.product) {
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

                                    <div className={`prefecture-container-item-btnContainer ${storage}`}>
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
    )
}

export default Container
