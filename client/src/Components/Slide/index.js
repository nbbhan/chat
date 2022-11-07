import flame from '../../Imgs/flame.png'

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

import left from '../../Imgs/left.png'
import right from '../../Imgs/right.png'

function Slide() {
    const products = [
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

    return (
        <div className="slide">
            <div className="slide-title">
                <div className="slide-title-left">
                    <img src={flame} />人気商品
                </div>

                <div className="slide-title-right">
                    もっと見る
                </div>
            </div>

            <div className="slide-container">
                <div className="slide-container-main">
                    {products.map((item, index) => {
                        return (
                            <div className="slide-container-item" key={index}>
                                <div className='slide-container-item-img'>
                                    <img src={item.img} />
                                </div>

                                <div className='slide-container-item-info'>
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='slide-btn'>
                <div className='slide-btn-pre'>
                    <img src={left} />
                </div>

                <div className='slide-btn-next'>
                    <img src={right} />
                </div>
            </div>
        </div>
    );
}

export default Slide;