import { useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../Imgs/logoN.png'
import loupe from '../../Imgs/loupe.png'
import lightOff from '../../Imgs/light-off.png'

import { Data } from '../../Provider'

function Nav() {
    const myData = useContext(Data)

    const triggerRef = useRef()

    const [trigger, setTrigger] = useState(false)

    const storage = window.localStorage.getItem('theme')

    const handleTogger = () => {
        triggerRef.current.classList.toggle('active')
    }

    const handleChangeTheme = () => {
        myData.handleChange()
    }

    const handleTrigger = () => {
        setTrigger(!trigger)

        myData.handleChangeWidth()
    }

    useEffect(() => {
        handleTogger()
    }, [trigger])

    return (
        <div className={`nav`}>
            <div className="nav-container">
                <div className={`nav-items ${storage}`}>
                    <div
                        className="nav-items-shadow"
                        style={{
                            left: `${myData.width}px`,
                        }}
                    ></div>

                    <div className="nav-items-container">
                        <button className="menu-trigger" ref={triggerRef} onClick={() => handleTrigger()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    {/* <div className="nav-items-light">
                        <div
                            onClick={() => {
                                handleChangeTheme()
                            }}
                        >
                            <img src={lightOff} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Nav
