import { useEffect, useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'

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

    const [variables, setVariables] = useState({
        productId: '',
        user: '',
    })

    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    const handleDelete = (productId, user) => {
        setVariables((prevState) => {
            return prevState
        })
        setVariables((prevState) => {
            prevState = {
                productId: productId,
                user: user,
            }

            let newPrevState = prevState

            return newPrevState
        })
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
                        return (
                            <div className="cart-main-item" key={index}>
                                <div className="cart-main-item-container">
                                    <div className="cart-main-item-img">
                                        <img src={element.imgUrl} />
                                    </div>

                                    <div className="cart-main-item-inf">
                                        <div className="cart-main-item-inf-container">
                                            <div className="cart-main-item-name">{element.info}</div>
                                            <div className="cart-main-item-price">{element.price}円（税込）</div>
                                            <div className="cart-main-item-rating">{element.rating}</div>
                                        </div>

                                        <div className="cart-main-item-inf-buy">
                                            <div className="cart-main-item-inf-buyBtn">今すぐ購入</div>
                                        </div>
                                    </div>

                                    <div
                                        className="cart-main-item-container-close"
                                        onClick={() => handleDelete(element.productId, 'jane')}
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
