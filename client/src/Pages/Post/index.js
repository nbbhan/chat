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

            <div className="about">
                <div className="about-container">
                    <Modal />

                    <SettingModal />

                    <Search />

                    <div className={`about-main ${storage}`}>
                        <Title props={inf} />

                        <div className="about-main-container">
                            <input placeholder="productId" />
                            <input placeholder="info" />
                            <input placeholder="price" />
                            <input placeholder="rating" />
                            <input placeholder="imgUrl" />
                            <input placeholder="area" />
                            <input placeholder="prefecture" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
