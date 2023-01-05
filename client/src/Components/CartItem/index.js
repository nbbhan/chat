import { gql, useQuery } from '@apollo/client'

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

function CartItem({ item }) {
    const { data } = useQuery(GET_PRODUCT)

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

                                    <div className="cart-main-item-container-close">削除</div>
                                </div>
                            </div>
                        )
                    }
                })}
        </>
    )
}

export default CartItem
