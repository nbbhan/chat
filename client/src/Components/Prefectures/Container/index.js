import { gql, useQuery } from '@apollo/client'
import { useContext, useEffect } from 'react'

import { Data } from '~/Provider'

const GET_PRODUCT = gql`
    query getProduct {
        getProduct {
            imgUrl
            price
            info
            productId
            rating
            area
            prefecture
        }
    }
`

function Container() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PRODUCT)

    useEffect(() => {}, [myData.product])

    return (
        <div className="prefectures-itemsContainer">
            <div>
                {data &&
                    data.getProduct.map((element, index) => {
                        if (myData.product) {
                            console.log(element.prefecture)
                            // console.log(myData.product)
                        }
                    })}
            </div>
        </div>
    )
}

export default Container
