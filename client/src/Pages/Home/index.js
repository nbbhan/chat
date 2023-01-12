import { useContext, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

import sen from '../../Imgs/sen.png'
import Explore from '../../Components/Explore'
import ImgContainer from '../../Components/ImgContainer'
import Slide from '../../Components/Slide'
import Prefectures from '~/Components/Prefectures'
import Sns from '~/Components/Sns'
import Last from '~/Components/Last'
import Modal from '~/Components/Modal'

import { Data } from '../../Provider'

import flame from '../../Imgs/flame.png'

const GET_PROFILE = gql`
    query getProfile {
        getProfile {
            username
        }
    }
`

function Home() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PROFILE)

    return (
        <>
            <Explore />

            <div className="home">
                <div className="home-container">
                    <Modal />
                    <div className="home-container-items">
                        <div className="home-container-item" style={{ height: '100%' }}>
                            {/* <div className="home-container-item-left">
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

                                <div className="home-container-item-left-btn">
                                    <div className="home-container-item-left-btn-text">
                                        すぐにはじめる<div className="underline"></div>
                                        <div className="home-container-item-left-btn-img">
                                            <img src={start} />
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="home-container-item-img">
                                <ImgContainer />
                            </div>
                        </div>

                        <div className="home-container-item" style={{ height: '250px' }}>
                            <div className="home-container-item-sen">
                                <img src={sen} />
                            </div>
                        </div>

                        <div className="home-container-item">
                            <Slide user={data} name="人気商品" icon={flame} />
                        </div>

                        <div className="home-container-item">
                            <Prefectures />
                        </div>

                        <div className="home-container-item">
                            <Sns />
                        </div>

                        <Last />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
