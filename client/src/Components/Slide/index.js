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

function Slide() {

    const items = [
        {
            name: '1',
            img: ocha,
        },
        {
            name: '2',
            img: kasutera,
        },
        {
            name: '3',
            img: baumkuchen,
        },
        {
            name: '4',
            img: fruitsdaihuku,
        },
        {
            name: '5',
            img: monaka,
        },
        {
            name: '6',
            img: warabimoti,
        },
        {
            name: '7',
            img: okayama,
        },
        {
            name: '8',
            img: gihu2,
        },
        {
            name: '9',
            img: kumamoto,
        },
        {
            name: '10',
            img: niigata,
        },
        {
            name: '11',
            img: momo,
        },
        {
            name: '12',
            img: hyougo,
        },
        {
            name: '13',
            img: wakayama,
        },
        {
            name: '14',
            img: kohakutou,
        },
        {
            name: '15',
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
                {items.map((item, index) => {
                    return (
                        <div className="slide-container-item" key={index}>
                            <div className='slide-container-item-name'>
                                {item.name}
                            </div>

                            <div className='slide-container-item-img'>
                                <img src={item.img} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Slide;