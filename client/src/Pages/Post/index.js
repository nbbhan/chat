import { gql, useMutation, useQuery } from '@apollo/client'
import { useState, useEffect, useRef } from 'react'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'

const GET_PRODUCT = gql`
    query GetProduct {
        getProduct {
            id
            productId
            info
            price
            rating
            imgUrl
            dealerId
            area
            prefecture
        }
    }
`

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
        des1: '山の幸、海の幸、伝統工芸品、四季折々の品',
        des2: 'あなたの出す様々な品を多くの人が待ちわびています。',
    }

    const [addToProduct] = useMutation(POST_PRODUCT)

    const { data } = useQuery(GET_PRODUCT)

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

    // const productRef = useRef()
    const infoRef = useRef()
    const imgRef = useRef()
    const areaRef = useRef()
    const prefectureRef = useRef()
    const priceRef = useRef()

    useEffect(() => {
        if (
            // variables.productId !== '' &&
            variables.info !== '' &&
            variables.area !== '' &&
            variables.prefecture !== '' &&
            variables.imgUrl !== '' &&
            variables.price !== ''
        ) {
            addToProduct({ variables })

            setVariables('')

            window.location.reload()

            // productRef.current.value = ''
            infoRef.current.value = ''
            imgRef.current.value = ''
            areaRef.current.value = ''
            prefectureRef.current.value = ''
            priceRef.current.value = ''

            alert('出品完了です。')
        }
    }, [submit])

    const handleSelect = (value) => {
        switch (value) {
            case 'hokkaido_touhoku':
                prefectureRef.current.innerHTML = `
                    <option value="">-選択-</option>
                    <option value="北海道">北海道</option>
                    <option value="青森県">青森県</option>
                    <option value="岩手県">岩手県</option>
                    <option value="宮城県">宮城県</option>
                    <option value="秋田県">秋田県</option>
                    <option value="山形県">山形県</option>
                    <option value="福島県">福島県</option>
                `
                break
            case 'kanto':
                prefectureRef.current.innerHTML = `
                    <option value="">-選択-</option>
                    <option value="茨城県">茨城県</option>
                    <option value="栃木県">栃木県</option>
                    <option value="群馬県">群馬県</option>
                    <option value="埼玉県">埼玉県</option>
                    <option value="千葉県">千葉県</option>
                    <option value="東京都">東京都</option>
                    <option value="神奈川県">神奈川県</option>
                `
                break
            case 'tyubu':
                prefectureRef.current.innerHTML = `
                    <option value="">-選択-</option>
                    <option value="新潟県">新潟県</option>
                    <option value="富山県">富山県</option>
                    <option value="石川県">石川県</option>
                    <option value="福井県">福井県</option>
                    <option value="山梨県">山梨県</option>
                    <option value="長野県">長野県</option>
                    <option value="岐阜県">岐阜県</option>
                    <option value="静岡県">静岡県</option>
                    <option value="愛知県">愛知県</option>
                `
                break
            case 'kinki':
                prefectureRef.current.innerHTML = `
                    <option value="三重県">三重県</option>
                    <option value="滋賀県">滋賀県</option>
                    <option value="京都府">京都府</option>
                    <option value="大阪府">大阪府</option>
                    <option value="兵庫県">兵庫県</option>
                    <option value="奈良県">奈良県</option>
                    <option value="和歌山県">和歌山県</option>
                `
                break
            case 'tyugoku':
                prefectureRef.current.innerHTML = `
                    <option value="">-選択-</option>
                    <option value="鳥取県">鳥取県</option>
                    <option value="島根県">島根県</option>
                    <option value="岡山県">岡山県</option>
                    <option value="広島県">広島県</option>
                    <option value="山口県">山口県</option>
                `
                break
            case 'sikoku':
                prefectureRef.current.innerHTML = `
                    <option value="">-選択-</option>
                    <option value="徳島県">徳島県</option>
                    <option value="香川県">香川県</option>
                    <option value="愛媛県">愛媛県</option>
                    <option value="高知県">高知県</option>
                `
                break
            case 'kyusyu':
                prefectureRef.current.innerHTML = `
                    <option value="">-選択-</option>
                    <option value="福岡県">福岡県</option>
                    <option value="佐賀県">佐賀県</option>
                    <option value="長崎県">長崎県</option>
                    <option value="熊本県">熊本県</option>
                    <option value="大分県">大分県</option>
                    <option value="宮崎県">宮崎県</option>
                    <option value="鹿児島県">鹿児島県</option>
                    <option value="沖縄県">沖縄県</option>
                `
                break
        }
    }

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
                                                placeholder="画像URLを入力..."
                                                ref={imgRef}
                                                onChange={(e) => setVariables({ ...variables, imgUrl: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="post-main-container-item">
                                        {/* <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">商品 ID</div>
                                            <div className="post-main-container-item-input">
                                                <input
                                                    ref={productRef}
                                                    onChange={(e) =>
                                                        setVariables({ ...variables, productId: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div> */}

                                        <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">名称</div>
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
                                                    onChange={(e) =>
                                                        setVariables({ ...variables, price: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">地域</div>
                                            <div className="post-main-container-item-input">
                                                <select
                                                    ref={areaRef}
                                                    onChange={(e) => {
                                                        setVariables({ ...variables, area: e.target.value })

                                                        handleSelect(e.target.value)
                                                    }}
                                                >
                                                    <option value="">-選択-</option>
                                                    <option value="hokkaido_touhoku">北海道・東北</option>
                                                    <option value="kanto">関東</option>
                                                    <option value="tyubu">中部</option>
                                                    <option value="kinki">近畿</option>
                                                    <option value="tyugoku">中国</option>
                                                    <option value="sikoku">四国</option>
                                                    <option value="kyusyu">九州</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="post-main-container-item-group">
                                            <div className="post-main-container-item-label">都道府県</div>
                                            <div className="post-main-container-item-input">
                                                <select
                                                    ref={prefectureRef}
                                                    onChange={(e) =>
                                                        setVariables({ ...variables, prefecture: e.target.value })
                                                    }
                                                ></select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="post-btn">
                                    <button
                                        type="submit"
                                        onClick={() => {
                                            setSubmit(!submit)

                                            let nextId

                                            // productID
                                            nextId = data && data.getProduct[data.getProduct.length - 1].id

                                            setVariables({ ...variables, productId: `p0${nextId + 1}` })
                                        }}
                                    >
                                        出品
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
