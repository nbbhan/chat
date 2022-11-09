import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

// import homeleft from '../../Imgs/homeleft.png'
import sen from '../../Imgs/sen.png'
// import itemBack from '../../Imgs/back1.png'
import Explore from '../../Components/Explore'
import ImgContainer from '../../Components/ImgContainer'
import Slide from '../../Components/Slide'

import { Data } from '../../Provider'

import flame from '../../Imgs/flame.png'
import newImg from '../../Imgs/new.png'

const GET_POPULAR = gql`
    query popular {
        getPopular {
            productId
            price
            info
            imgUrl
        }
    }
`

function Home() {
    const myData = useContext(Data)

    const { loading, data, error } = useQuery(GET_POPULAR)

    return (
        <>
            <Explore />

            {/* <div className='background'>
                <img src={itemBack}/>
            </div> */}

            <div className="home">
                <div
                    className="home-container"
                    style={{ left: `${myData.width}px`, width: `calc(100% - ${myData.width}px)` }}
                >
                    <div className="home-container-item">
                        <div className="home-container-item-left">
                            <div className="home-container-item-left-title">QOKS</div>

                            <div className="home-container-item-left-contents">
                                <div>
                                    経済の停滞した現状の打開のため国消国産の精神のもと農畜産業のみならずそのほかの産業においてもMADE
                                    IN JAPANの製品を取り扱い、それにより販売者は
                                    <span style={{ color: '#b88c5c' }}>販売経路の拡大</span>とそれに伴う
                                    <span style={{ color: '#b88c5c' }}>売上の増加</span>
                                    を見込め、利用者は遠方の故郷や、訪れたことのない土地の特産品を得ることができる。これを目標としてQOKSを開発しました。
                                </div>
                            </div>

                            {/* <div className='home-container-item-left-btn'>
                                <div>
                                    はじめる
                                </div>
                            </div> */}

                            {/* <div className="home-container-item-left-background">
                                <img src={homeleft} />
                            </div> */}
                        </div>

                        <div className="home-container-item-right">
                            <ImgContainer />
                        </div>
                    </div>

                    <div className="home-container-item" style={{ height: '250px' }}>
                        <div>
                            <img src={sen} />
                        </div>
                    </div>

                    <div className="home-container-item">
                        <Slide arr={data} name="人気商品" icon={flame} />
                    </div>

                    <div className="home-container-item"></div>

                    <div className="home-container-item-last"></div>
                </div>
            </div>
        </>
    )
}

export default Home
