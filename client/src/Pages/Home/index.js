import { useContext } from 'react';
import { Link } from 'react-router-dom'

// import left from '../../Imgs/左.png'
import itemBack from '../../Imgs/back1.png'
import Explore from '../../Components/Explore';
import ImgContainer from '../../Components/ImgContainer'

import { Data } from '../../Provider'

function Home() {

    const myData = useContext(Data)

    return ( 
        <>
            <Explore />

            <div className='background'>
                <img src={itemBack}/>
            </div>

            <div className='home'>
                <div className='home-container' style={{left: `${myData.width}px`, width: `calc(100% - ${myData.width}px)`}}>
                    <div className='home-container-item'>
                        <div className='home-container-item-left'>

                            {/* <div className='home-container-item-left-background'>
                                <img src={left}/>
                            </div> */}

                            <div className='home-container-item-left-title'>
                                QOKS
                            </div>

                            <div className='home-container-item-left-contents'>
                                <div>
                                    経済の停滞した現状の打開のため国消国産の精神のもと農畜産業のみならずそのほかの産業においてもMADE IN JAPANの製品を取り扱い、それにより販売者は販売経路の拡大とそれに伴う売上の増加を見込め、利用者は遠方の故郷や、訪れたことのない土地の特産品を得ることができる。これを目標としてQOKSを開発しました。
                                </div>
                            </div>

                            <div className='home-container-item-left-btn'>
                                <div>
                                    はじめる
                                </div>
                            </div>

                            <div>
                                <span><Link to='/register'>新規アカウント作成</Link></span>
                            </div>
                        </div>

                        <div className='home-container-item-right'>
                            <ImgContainer />
                        </div>
                    </div>

                    <div className='home-container-item'>
                        b
                    </div>

                    <div className='home-container-item'>
                        c
                    </div>

                    <div className='home-container-item-last'>
                        d
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;