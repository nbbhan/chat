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
        des1: '山の幸、海の幸、伝統工芸品、四季折々の品',
        des2: 'あなたの出す様々な品を多くの人が待ちわびています。',
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

            alert('出品完了です。')
        }
    }, [submit])

    const handleSelect = (value) => {
        switch (value) {
            case 'hokkaido_touhoku':
                prefectureRef.current.innerHTML = `
                    <option value="hokkaido">北海道</option>
                    <option value="aomori">青森県</option>
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
                                                >
                                                    {/* <option value="hokkaido">北海道</option>
                                                    <option value="aomori">青森県</option>
                                                    <option value="iwate">岩手県</option>
                                                    <option value="miyagi">宮城県</option>
                                                    <option value="akita">秋田県</option>
                                                    <option value="yamagata">山形県</option>
                                                    <option value="fukushima">福島県</option>
                                                    <option value="ibaraki">茨城県</option>
                                                    <option value="tochigi">栃木県</option>
                                                    <option value="gunma">群馬県</option>
                                                    <option value="saitama">埼玉県</option>
                                                    <option value="chiba">千葉県</option>
                                                    <option value="tokyo">東京都</option>
                                                    <option value="kanagawa">神奈川県</option>
                                                    <option value="niigata">新潟県</option>
                                                    <option value="toyama">富山県</option>
                                                    <option value="ishikawa">石川県</option>
                                                    <option value="fukui">福井県</option>
                                                    <option value="yamanashi">山梨県</option>
                                                    <option value="nagano">長野県</option>
                                                    <option value="gifu">岐阜県</option>
                                                    <option value="shizuoka">静岡県</option>
                                                    <option value="aichi">愛知県</option>
                                                    <option value="mie">三重県</option>
                                                    <option value="shiga">滋賀県</option>
                                                    <option value="kyoto">京都府</option>
                                                    <option value="osaka">大阪府</option>
                                                    <option value="hyogo">兵庫県</option>
                                                    <option value="nara">奈良県</option>
                                                    <option value="wakayama">和歌山県</option>
                                                    <option value="tottori">鳥取県</option>
                                                    <option value="shimane">島根県</option>
                                                    <option value="okayama">岡山県</option>
                                                    <option value="hiroshima">広島県</option>
                                                    <option value="yamaguchi">山口県</option>
                                                    <option value="tokushima">徳島県</option>
                                                    <option value="kagawa">香川県</option>
                                                    <option value="ehime">愛媛県</option>
                                                    <option value="kochi">高知県</option>
                                                    <option value="fukuoka">福岡県</option>
                                                    <option value="saga">佐賀県</option>
                                                    <option value="nagasaki">長崎県</option>
                                                    <option value="kumamoto">熊本県</option>
                                                    <option value="oita">大分県</option>
                                                    <option value="miyazaki">宮崎県</option>
                                                    <option value="kagoshima">鹿児島県</option>
                                                    <option value="okinawa">沖縄県</option> */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="post-btn">
                                    <button type="submit" onClick={() => setSubmit(!submit)}>
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
