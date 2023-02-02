import { useContext, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

import sen from '../../Imgs/sen.png'
import sen_dark from '../../Imgs/sen_dark.png'
import Explore from '../../Components/Explore'
import ImgContainer from '../../Components/ImgContainer'
import Slide from '../../Components/Slide'
import Prefectures from '~/Components/Prefectures'
import Sns from '~/Components/Sns'
import Last from '~/Components/Last'
import Modal from '~/Components/Modal'
import SettingModal from '~/Components/SettingModal'
import Noti from '~/Components/Noti'
import Search from '~/Components/Search'

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

    const storage = window.localStorage.getItem('theme')

    return (
        <>
            <Explore />

            <div className="home">
                <div className="home-container">
                    <Modal />

                    <SettingModal />

                    <Noti />

                    <Search />

                    <div className="home-container-items">
                        <div className={`home-container-item ${storage}`} style={{ height: '100%' }}>
                            <div className="home-container-item-img">
                                <ImgContainer />
                            </div>
                        </div>

                        <div className={`home-container-item ${storage}`} style={{ height: '250px' }}>
                            <div className="home-container-item-sen">
                                <img src={storage === 'dark' ? sen_dark : sen} />
                            </div>
                        </div>

                        <div className={`home-container-item ${storage}`}>
                            <Slide user={data} name="人気商品" icon={flame} />
                        </div>

                        <div className={`home-container-item ${storage}`}>
                            <Prefectures />
                        </div>

                        <div className={`home-container-item ${storage}`}>
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
