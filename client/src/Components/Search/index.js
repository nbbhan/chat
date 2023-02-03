import { useContext, useEffect, useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'

import { Data } from '~/Provider'

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

    useEffect(() => {}, [myData.sv])

    useEffect(() => {
        if (variables.productId != '' && variables.user != '') {
            addToCart({ variables })
        }
    }, [myData.submit])

    const storage = window.localStorage.getItem('theme')

    return (
        <div className="search" style={{ display: `${myData.search}` }}>
            <div className={`search-main ${storage}`}>
                <div className="search-title">
                    <span style={{ color: 'var(--myColor)', fontSize: '16px' }}>検索結果:&nbsp;</span> {myData.sv}
                </div>

                <div className="search-container">
                    <div className="search-items">
                        {data &&
                            data.getProduct.map((element, index) => {
                                if (element.prefecture === myData.sv || element.info === myData.sv) {
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
                                        <div className="search-item" key={index}>
                                            <div className="search-item-img">
                                                <img src={element.imgUrl} alt="" />
                                            </div>
                                            <div className="search-item-info">
                                                <div className="search-item-info-container">
                                                    <div className="search-item-name">{element.info}</div>
                                                    <div className="search-item-price">{element.price}円（税込）</div>
                                                    <div className="search-item-rating">{renderRating}</div>
                                                </div>

                                                <div className="search-item-info-add">
                                                    <div
                                                        className="search-item-info-addBtn"
                                                        onClick={() => {
                                                            handleAdd('cart', {
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
