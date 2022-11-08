import { useContext } from 'react';
import { Link } from 'react-router-dom'

// import left from '../../Imgs/左.png'
import sen from '../../Imgs/sen.png'
// import itemBack from '../../Imgs/back1.png'
import Explore from '../../Components/Explore';
import ImgContainer from '../../Components/ImgContainer'
import Slide from '../../Components/Slide'

import ocha from '../../Imgs/products/お茶_t.jpeg'
import kasutera from '../../Imgs/products/カステラ_t.jpeg'
import baumkuchen from '../../Imgs/products/バウムクーヘン_t.jpeg'
import fruitsdaihuku from '../../Imgs/products/フルーツ大福_t.jpeg'
import monaka from '../../Imgs/products/モナカ_t.jpeg'
import warabimoti from '../../Imgs/products/わらび餅_t.jpeg'
import okayama from '../../Imgs/products/岡山.jpg'
import gihu2 from '../../Imgs/products/岐阜2.jpg'
import kumamoto from '../../Imgs/products/熊本.jpg'
import niigata from '../../Imgs/products/新潟.jpg'
import momo from '../../Imgs/products/桃_t.jpeg'
import hyougo from '../../Imgs/products/兵庫.jpeg'
import wakayama from '../../Imgs/products/和歌山.jpg'
import kohakutou from '../../Imgs/products/琥珀等_t.jpeg'
import mannjuu from '../../Imgs/products/饅頭_t.jpeg'

import { Data } from '../../Provider'

import flame from '../../Imgs/flame.png'
import newImg from '../../Imgs/new.png'

function Home() {

    const myData = useContext(Data)

    const ninki = [
        {
            name: '商品名',
            img: ocha,
        },
        {
            name: '商品名',
            img: kasutera,
        },
        {
            name: '商品名',
            img: baumkuchen,
        },
        {
            name: '商品名',
            img: fruitsdaihuku,
        },
        {
            name: '商品名',
            img: monaka,
        },
        {
            name: '商品名',
            img: warabimoti,
        },
        {
            name: '商品名',
            img: okayama,
        },
        {
            name: '商品名',
            img: gihu2,
        },
        {
            name: '商品名',
            img: kumamoto,
        },
        {
            name: '商品名0',
            img: niigata,
        },
        {
            name: '商品名1',
            img: momo,
        },
        {
            name: '商品名2',
            img: hyougo,
        },
        {
            name: '商品名3',
            img: wakayama,
        },
        {
            name: '商品名4',
            img: kohakutou,
        },
        {
            name: '商品名5',
            img: mannjuu,
        },
    ]

    const shinchaku = [
        {
            name: '商品名',
            img: okayama,
        },
        {
            name: '商品名',
            img: gihu2,
        },
        {
            name: '商品名',
            img: kumamoto,
        },
        {
            name: '商品名0',
            img: niigata,
        },
        {
            name: '商品名1',
            img: momo,
        },
        {
            name: '商品名2',
            img: hyougo,
        },
        {
            name: '商品名3',
            img: wakayama,
        },
        {
            name: '商品名4',
            img: kohakutou,
        },
        {
            name: '商品名5',
            img: mannjuu,
        },
    ]

    return ( 
        <>
            <Explore />

            {/* <div className='background'>
                <img src={itemBack}/>
            </div> */}

            <div className='home'>
                <div className='home-container' style={{left: `${myData.width}px`, width: `calc(100% - ${myData.width}px)`}}>
                    <div className='home-container-item' style={{height: "1000px"}}>
                        <div className='home-container-item-left'>
                            <div className='home-container-item-left-title'>
                                QOKS
                            </div>

                            <div className='home-container-item-left-contents'>
                                <div>
                                    経済の停滞した現状の打開のため国消国産の精神のもと農畜産業のみならずそのほかの産業においてもMADE IN JAPANの製品を取り扱い、それにより販売者は<span style={{color: '#b88c5c'}}>販売経路の拡大</span>とそれに伴う<span style={{color: '#b88c5c'}}>売上の増加</span>を見込め、利用者は遠方の故郷や、訪れたことのない土地の特産品を得ることができる。これを目標としてQOKSを開発しました。
                                </div>
                            </div>

                            {/* <div className='home-container-item-left-btn'>
                                <div>
                                    はじめる
                                </div>
                            </div> */}

                            {/* <div className='home-container-item-left-background'>
                                <img src={left}/>
                            </div> */}
                        </div>

                        <div className='home-container-item-right'>
                            <ImgContainer />
                        </div>
                    </div>

                    <div className='home-container-item' style={{height: "250px"}}>
                        <div>
                            <img src={sen}/>
                        </div>
                    </div>

                    <div className='home-container-item'>
                        <Slide arr={ninki} name='人気商品' icon={flame}/>
                    </div>

                    <div className='home-container-item'>
                        <Slide arr={shinchaku} name='新着商品' icon={newImg}/>
                    </div>

                    <div className='home-container-item-last'>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;