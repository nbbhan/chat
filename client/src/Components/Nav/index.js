import { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../Imgs/logoN.png'
import loupe from '../../Imgs/loupe.png'
import { Data } from '../../Provider'

function Nav() {

    const myData = useContext(Data)

    const triggerRef = useRef()

    const [trigger, setTrigger] = useState(false)

    const handleTogger = () => {
        triggerRef.current.classList.toggle('active')
    }

    const handleChangeTheme = () => {
        myData.handleChange()
    }

    useEffect(() => {
        handleTogger()
    }, [trigger])

    return ( 
        <div className={`nav ${myData.theme}`}>
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

                    <div>
                        <button onClick={() => handleChangeTheme()}>
                            Theme Change!
                        </button>
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