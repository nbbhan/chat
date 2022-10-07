import logo from '../../Imgs/logoN.png'
import loupe from '../../Imgs/loupe.png'

function Nav() {

    // const menuTrigger = document.querySelector('.menu-trigger')

    // menuTrigger.onclick = () => {
    //     menuTrigger.classList.toggle('active')
    // }

    return ( 
        <div className="nav">
            <div className='nav-container'>
                <div className='nav-items'>
                    <div className='nav-items-logo'>
                        <img src={logo}/>
                    </div>

                    <div className='nav-search'>
                        <input type="text" placeholder='Search...'/>

                        <div>
                            <img src={loupe} />
                        </div>
                    </div>

                    <div className='nav-menu'>
                        <div>
                            Contact
                        </div>

                        <div>
                            Login
                        </div>

                        <button className='menu-trigger'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;