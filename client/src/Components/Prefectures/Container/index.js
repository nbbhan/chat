import { gql, useQuery, useMutation } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'

import { Data } from '~/Provider'

import cart from '~/Imgs/cart.png'
import cart_dark from '~/Imgs/cart_dark.png'
import star from '~/Imgs/star.png'
import star_half from '~/Imgs/star_half.png'
import star_space from '~/Imgs/star_space.png'

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
                            let renderRating

                            switch (item.rating) {
                                case '0':
                                    renderRating = (
                                        <div>
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '0.1':
                                case '0.2':
                                case '0.3':
                                case '0.4':
                                case '0.5':
                                case '0.6':
                                case '0.7':
                                case '0.8':
                                case '0.9':
                                    renderRating = (
                                        <div>
                                            <img src={star_half} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '1':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '1.1':
                                case '1.2':
                                case '1.3':
                                case '1.4':
                                case '1.5':
                                case '1.6':
                                case '1.7':
                                case '1.8':
                                case '1.9':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star_half} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '2':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '2.1':
                                case '2.2':
                                case '2.3':
                                case '2.4':
                                case '2.5':
                                case '2.6':
                                case '2.7':
                                case '2.8':
                                case '2.9':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star_half} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '3':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star_space} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '3.1':
                                case '3.2':
                                case '3.3':
                                case '3.4':
                                case '3.5':
                                case '3.6':
                                case '3.7':
                                case '3.8':
                                case '3.9':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star_half} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '4':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star_space} alt="" />
                                        </div>
                                    )
                                    break
                                case '4.1':
                                case '4.2':
                                case '4.3':
                                case '4.4':
                                case '4.5':
                                case '4.6':
                                case '4.7':
                                case '4.8':
                                case '4.9':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star_half} alt="" />
                                        </div>
                                    )
                                    break
                                case '5':
                                    renderRating = (
                                        <div>
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                        </div>
                                    )
                                    break
                                default:
                                    renderRating = <div></div>
                                    break
                            }

                            return (
                                <div className="prefecture-container-item" key={index}>
                                    <div className="prefecture-container-item-img">
                                        <img id="prefecture-img" src={item.imgUrl} />
                                    </div>

                                    <div className="prefecture-container-item-info">
                                        <span>{item.info}</span>
                                    </div>

                                    <div className="prefecture-container-item-price">{`${item.price}円（税込）`}</div>

                                    <div className="prefecture-container-item-prefecture">{item.prefecture}</div>

                                    <div className="prefecture-container-item-rating">{renderRating}</div>

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
                                            <img src={love} alt="" />
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
                                            <img src={storage === 'dark' ? cart_dark : cart} alt="" />
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
