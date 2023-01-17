import { useContext, useEffect } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'

import { Data } from '~/Provider'

const GET_PRODUCT = gql`
    query getProduct {
        getProduct {
            imgUrl
            price
            info
            productId
            rating
            prefecture
        }
    }
`

function Search() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PRODUCT)

    const handleClose = () => {
        myData.setSearch('none')
    }

    useEffect(() => {}, [myData.sv])

    return (
        <div className="search" style={{ display: `${myData.search}` }}>
            <div className="search-main">
                <div className="search-title">
                    <span style={{ color: 'var(--myColor)', fontSize: '16px' }}>検索結果:&nbsp;</span> {myData.sv}
                </div>

                <div className="search-container">
                    <div className="search-items">
                        {/* <div className="search-item">
                            <div className="search-item-img">
                                <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </div>
                            <div className="search-item-info">
                                <div className="search-item-info-container">
                                    <div className="search-item-name">abc</div>
                                    <div className="search-item-price">100円（税込）</div>
                                    <div className="search-item-rating">5</div>
                                </div>

                                <div className="search-item-info-add">
                                    <div className="search-item-info-addBtn">カートに追加</div>
                                </div>
                            </div>
                        </div>

                        <div className="search-item">
                            <div className="search-item-img">
                                <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </div>

                            <div className="search-item-info">
                                <div className="search-item-info-container">
                                    <div className="search-item-name">abc</div>
                                    <div className="search-item-price">100円（税込）</div>
                                    <div className="search-item-rating">5</div>
                                </div>

                                <div className="search-item-info-add">
                                    <div className="search-item-info-addBtn">カートに追加</div>
                                </div>
                            </div>
                        </div>

                        <div className="search-item">
                            <div className="search-item-img">
                                <img src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </div>
                            <div className="search-item-info">
                                <div className="search-item-info-container">
                                    <div className="search-item-name">abc</div>
                                    <div className="search-item-price">100円（税込）</div>
                                    <div className="search-item-rating">5</div>
                                </div>

                                <div className="search-item-info-add">
                                    <div className="search-item-info-addBtn">カートに追加</div>
                                </div>
                            </div>
                        </div> */}

                        {data &&
                            data.getProduct.map((element, index) => {
                                if (element.prefecture === myData.sv || element.info === myData.sv) {
                                    return (
                                        <div className="search-item" key={index}>
                                            <div className="search-item-img">
                                                <img src={element.imgUrl} />
                                            </div>
                                            <div className="search-item-info">
                                                <div className="search-item-info-container">
                                                    <div className="search-item-name">{element.info}</div>
                                                    <div className="search-item-price">{element.price}円（税込）</div>
                                                    <div className="search-item-rating">{element.rating}</div>
                                                </div>

                                                <div className="search-item-info-add">
                                                    <div className="search-item-info-addBtn">カートに追加</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                    </div>
                </div>

                <div className="search-close">
                    <div className="search-close-container" onClick={() => handleClose()}>
                        閉じる
                        <div className="underline"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
