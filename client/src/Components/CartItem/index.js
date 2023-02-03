import { useEffect, useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useContext } from 'react'

import { Data } from '../../Provider'

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
        }
    }
`

const GET_PROFILE = gql`
    query getProfile {
        getProfile {
            username
            createdAt
            imageUrl
            buyPoint
            getPoint
            follow
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation DeleteCart($productId: String!, $user: String!) {
        deleteCart(productId: $productId, user: $user) {
            productId
            user
        }
    }
`

function CartItem({ item }) {
    const { data } = useQuery(GET_PRODUCT)

    const profile = useQuery(GET_PROFILE)

    const myData = useContext(Data)

    const [variables, setVariables] = useState({
        productId: '',
        user: '',
    })

    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    const handleDelete = (object) => {
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

        window.location.reload()
    }

    useEffect(() => {
        if (variables.productId != '' && variables.user != '') {
            deleteProduct({ variables })
        }
    }, [variables])

    return (
        <>
            {data &&
                data.getProduct.map((element, index) => {
                    if (element.productId === item.productId) {
                        let renderRating

                        switch (element.rating) {
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
                            <div className="cart-main-item" key={index}>
                                <div className="cart-main-item-container">
                                    <div className="cart-main-item-img">
                                        <img src={element.imgUrl} alt="" />
                                    </div>

                                    <div className="cart-main-item-inf">
                                        <div className="cart-main-item-inf-container">
                                            <div className="cart-main-item-name">{element.info}</div>
                                            <div className="cart-main-item-price">{element.price}円（税込）</div>
                                            <div className="cart-main-item-rating">{renderRating}</div>
                                        </div>

                                        <div className="cart-main-item-inf-buy">
                                            <div
                                                className="cart-main-item-inf-buyBtn"
                                                onClick={() =>
                                                    handleDelete({
                                                        productId: element.productId,
                                                        user: profile.data && profile.data.getProfile[0].username,
                                                    })
                                                }
                                            >
                                                今すぐ購入
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="cart-main-item-container-close"
                                        onClick={() =>
                                            handleDelete({
                                                productId: element.productId,
                                                user: profile.data && profile.data.getProfile[0].username,
                                            })
                                        }
                                    >
                                        削除
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
        </>
    )
}

export default CartItem
