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

function FavoriteItem({ item }) {
    const { data } = useQuery(GET_PRODUCT)

    return (
        <>
            {data &&
                data.getProduct.map((element, index) => {
                    if (element.productId === item.productId) {
                        return (
                            <div className="favorite-main-item" key={index}>
                                <div className="favorite-main-item-container">
                                    <div className="favorite-main-item-img">
                                        <img src={element.imgUrl} alt="" />
                                    </div>

                                    <div className="favorite-main-item-inf">
                                        <div className="favorite-main-item-inf-container">
                                            <div className="favorite-main-item-name">{element.info}</div>
                                            <div className="favorite-main-item-price">{element.price}円（税込）</div>
                                            <div className="favorite-main-item-rating">{element.rating}</div>
                                        </div>

                                        <div className="favorite-main-item-inf-buy">
                                            <div className="favorite-main-item-inf-buyBtn">今すぐ購入</div>
                                        </div>
                                    </div>

                                    <div className="favorite-main-item-container-close">削除</div>
                                </div>
                            </div>
                        )
                    }
                })}
        </>
    )
}

export default FavoriteItem
