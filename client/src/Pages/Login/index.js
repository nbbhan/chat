import { Link } from 'react-router-dom'

import Nav from '../../Components/Nav'

function Login() {
    return ( 
        <>
            <Nav />

            <div className='login'>
                <div className='login-container'>
                    <div className='login-container-title'>Login</div>

                    <div className='login-container-items'>
                        <div className='login-container-item'>
                            <label>Username</label><br />
                            <div>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='login-container-item'>
                            <label>Password</label><br />
                            <div>
                                <input type="password" />
                            </div>
                        </div>
                    </div>

                    <div className='login-btn'>
                        <button type='submit'>Login</button>
                    </div>

                    <div className='login-link'>
                        <span>Create a new account! <Link to="/register">Register</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;