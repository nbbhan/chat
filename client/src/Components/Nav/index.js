import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../Imgs/logoN.png'
import loupe from '../../Imgs/loupe.png'

function Nav() {

    const triggerRef = useRef()

    const [trigger, setTrigger] = useState(false)

    const handleTogger = () => {
        triggerRef.current.classList.toggle('active')
    }

    useEffect(() => {
        handleTogger()
    }, [trigger])

    return ( 
        <div className="nav">
            <div className='nav-container'>
                <div className='nav-items'>
                    <div className='nav-items-container'>
                        <button className='menu-trigger' ref={triggerRef} onClick={() => setTrigger(!trigger)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <Link to='/'>
                            <div className='nav-items-logo'>
                                <img src={logo}/>
                            </div>
                        </Link>
                    </div>

                    <div className='nav-items-search'>
                        <input type="text" placeholder='Search...'/>

                        <div>
                            <img src={loupe} />
                        </div>
                    </div>

                    <div className='nav-items-btn'>
                        <Link to='/login'>
                            <div>
                                Login
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;