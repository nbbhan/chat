import { useContext } from 'react';

import home from '../../Imgs/home.png'
import bell from '../../Imgs/bell.png'
import token from '../../Imgs/token.png'
import cart from '../../Imgs/shopping-cart.png'
import chat from '../../Imgs/chat.png'
import info from '../../Imgs/info.png'
import favor from '../../Imgs/favor.png'

import { Data } from '../../Provider'

function Explore() {

    const myData = useContext(Data)

    return (
        <div className="explore" style={{width: `${myData.width}px`}}>
            <div className='explore-items'>
                <div className='explore-item'>
                    <img src={home} />

                    <div>ホーム</div>
                </div>

                <div className='explore-item'>
                    <img src={info} />

                    <div>プロフィール</div>
                </div>

                <div className='explore-item'>
                    <img src={bell} />

                    <div>通知</div>
                </div>

                <div className='explore-item'>
                    <img src={token} />

                    <div>ポイント</div>
                </div>

                <div className='explore-item'>
                    <img src={cart} />

                    <div>カート</div>
                </div>

                <div className='explore-item'>
                    <img src={chat} />

                    <div>チャット</div>
                </div>

                <div className='explore-item'>
                    <img src={favor} />

                    <div>お気に入り</div>
                </div>
            </div>
        </div>
    );
}

export default Explore;