import { useContext } from 'react';

import user from '../../Imgs/user.png'
import home from '../../Imgs/home.png'
import bell from '../../Imgs/bell.png'
import token from '../../Imgs/token.png'
import cart from '../../Imgs/shopping-cart.png'

import { Data } from '../../Provider'

function Explore() {

    const myData = useContext(Data)

    return (
        <div className="explore" style={{width: `${myData.width}px`}}>
            <div className='explore-item'>
                <img src={home} />

                <div>Home</div>
            </div>

            <div className='explore-item'>
                <img src={bell} />

                <div>Notification</div>
            </div>

            <div className='explore-item'>
                <img src={token} />

                <div>Point</div>
            </div>

            <div className='explore-item'>
                <img src={cart} />

                <div>Cart</div>
            </div>
        </div>
    );
}

export default Explore;