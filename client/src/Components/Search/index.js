import { useContext, useEffect, useState } from 'react'
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

const ADD_TO_CART = gql`
    mutation Mutation($productId: String!, $user: String!) {
        addCart(productId: $productId, user: $user) {
            productId
            user
        }
    }
`

function Search() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PRODUCT)

    const profile = useQuery(GET_PROFILE)

    const handleClose = () => {
        myData.setSearch('none')
    }

    const [variables, setVariables] = useState({
        productId: '',
        user: '',
    })

    const [addToCart] = useMutation(ADD_TO_CART)

    const handleAdd = (object) => {
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
    }

    useEffect(() => {}, [myData.sv])

    useEffect(() => {
        if (variables.productId != '' && variables.user != '') {
            addToCart({ variables })
        }
    }, [variables])

    return (
        <div className="search" style={{ display: `${myData.search}` }}>
            <div className="search-main">
                <div className="search-title">
                    <span style={{ color: 'var(--myColor)', fontSize: '16px' }}>検索結果:&nbsp;</span> {myData.sv}
                </div>

                <div className="search-container">
                    <div className="search-items">
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
                                                    <div
                                                        className="search-item-info-addBtn"
                                                        onClick={() => {
                                                            handleAdd({
                                                                productId: element.productId,
                                                                user:
                                                                    profile.data && profile.data.getProfile[0].username,
                                                            })
                                                        }}
                                                    >
                                                        カートに追加
                                                    </div>
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
