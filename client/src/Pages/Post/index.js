import { gql, useQuery, useMutation } from '@apollo/client'

import Explore from '~/Components/Explore'
import Title from '~/Components/Title'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Search from '~/Components/Search'

const POST_PRODUCT = gql`
    mutation Mutation(
        $productId: String!
        $info: String!
        $rating: String!
        $imgUrl: String!
        $dealerId: String!
        $area: String!
        $prefecture: String!
        $price: Float
    ) {
        addProduct(
            productId: $productId
            info: $info
            rating: $rating
            imgUrl: $imgUrl
            dealerId: $dealerId
            area: $area
            prefecture: $prefecture
            price: $price
        ) {
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
                                <div className="post-main-container-item">
                                    <div className="post-main-container-item-imgInput">
                                        <input type="file" />
                                    </div>
                                </div>

                                <div className="post-main-container-item">
                                    <div className="post-main-container-item-group">
                                        <div className="post-main-container-item-label">商品 ID</div>
                                        <div className="post-main-container-item-input">
                                            <input />
                                        </div>
                                    </div>

                                    <div className="post-main-container-item-group">
                                        <div className="post-main-container-item-label">名前</div>
                                        <div className="post-main-container-item-input">
                                            <input />
                                        </div>
                                    </div>

                                    <div className="post-main-container-item-group">
                                        <div className="post-main-container-item-label">値段</div>
                                        <div className="post-main-container-item-input">
                                            <input />
                                        </div>
                                    </div>

                                    <div className="post-main-container-item-group">
                                        <div className="post-main-container-item-label">地域</div>
                                        <div className="post-main-container-item-input">
                                            <input />
                                        </div>
                                    </div>

                                    <div className="post-main-container-item-group">
                                        <div className="post-main-container-item-label">都道府県</div>
                                        <div className="post-main-container-item-input">
                                            <input />
                                        </div>
                                    </div>
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
