import { useEffect, useState, useRef, useContext } from 'react'

import { Data } from '../../Provider'

function Nav() {
    const myData = useContext(Data)

    const triggerRef = useRef()

    const storage = window.localStorage.getItem('theme')

    const handleTogger = () => {
        triggerRef.current.classList.toggle('active')
    }

    useEffect(() => {
        handleTogger()
    }, [myData.trigger])

    return (
        <div className={`nav`} onClick={() => myData.handleTrigger()}>
            <div className="nav-container">
                <div className={`nav-items`}>
                    <div
                        className="nav-items-shadow"
                        style={{
                            left: `${myData.width}px`,
                        }}
                    ></div>

                    <div className="nav-items-container">
                        <button className="menu-trigger" ref={triggerRef}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
