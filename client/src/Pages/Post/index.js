import { gql, useMutation } from '@apollo/client'
import { useState, useEffect, useRef } from 'react'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'

const POST_PRODUCT = gql`
    mutation Mutation(
        $productId: String!
        $info: String!
        $imgUrl: String!
        $area: String!
        $prefecture: String!
        $price: String!
    ) {
        addProduct(
            productId: $productId
            info: $info
            imgUrl: $imgUrl
            area: $area
            prefecture: $prefecture
            price: $price
        ) {
            productId
            info
            price
            imgUrl
            area
            prefecture
        }
    }
`

function Post() {
    const inf = {
        link: 'post',
        en: 'POST',
        jp: '出品',
        des1: '出品用のページです',
        des2: '\\です！/',
    }

    const [addToProduct] = useMutation(POST_PRODUCT)

    const storage = window.localStorage.getItem('theme')

    const [submit, setSubmit] = useState(false)

    const [variables, setVariables] = useState({
        productId: '',
        info: '',
        imgUrl: '',
        area: '',
        prefecture: '',
        price: '',
    })

    const productRef = useRef()
    const infoRef = useRef()
    const imgRef = useRef()
    const areaRef = useRef()
    const prefectureRef = useRef()
    const priceRef = useRef()

    useEffect(() => {
        if (
            variables.productId !== '' &&
            variables.info !== '' &&
            variables.area !== '' &&
            variables.prefecture !== '' &&
            variables.imgUrl !== '' &&
            variables.price !== ''
        ) {
            addToProduct({ variables })

            setVariables('')

            productRef.current.value = ''
            infoRef.current.value = ''
            imgRef.current.value = ''
            areaRef.current.value = ''
            prefectureRef.current.value = ''
            priceRef.current.value = ''

            alert('出品完了')
        }
    }, [submit])

    return (
        <>
            <Explore />

            <div className="post">
                <div className="post-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <div className={`post-main ${storage}`}>
                        <Title props={inf} />

                        <div className="post-main-container">
                            <div className="post-main-container-items">
                                <div className="post-main-container-items-main">
                                    <div className="post-main-container-item">
                                        <div className="post-main-container-item-imgInput">
                                            <input
                                                ref={imgRef}
                                                onChange={(e) => setVariables({ ...variables, imgUrl: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="post-main-container-item">
                                        <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">商品 ID</div>
                                            <div className="post-main-container-item-input">
                                                <input
                                                    ref={productRef}
                                                    onChange={(e) =>
                                                        setVariables({ ...variables, productId: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">名前</div>
                                            <div className="post-main-container-item-input">
                                                <input
                                                    ref={infoRef}
                                                    onChange={(e) =>
                                                        setVariables({ ...variables, info: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">値段</div>
                                            <div className="post-main-container-item-input">
                                                <input
                                                    ref={priceRef}
                                                    type="number"
                                                    step="any"
                                                    onChange={(e) =>
                                                        setVariables({ ...variables, price: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">地域</div>
                                            <div className="post-main-container-item-input">
                                                <input
                                                    ref={areaRef}
                                                    onChange={(e) =>
                                                        setVariables({ ...variables, area: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">都道府県</div>
                                            <div className="post-main-container-item-input">
                                                <input
                                                    ref={prefectureRef}
                                                    onChange={(e) =>
                                                        setVariables({ ...variables, prefecture: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="post-btn">
                                    <button type="submit" onClick={() => setSubmit(!submit)}>
                                        アップロード
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
