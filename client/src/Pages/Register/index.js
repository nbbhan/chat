import { Link } from 'react-router-dom'

import Nav from '../../Components/Nav'

function Register() {
    return (
        <>
            <Nav />

            <div className='register'>
                <div className='register-container'>
                    <div className='register-container-title'>Register</div>

                    <div className='register-container-items'>
                        <div className='register-container-item'>
                            <label>Username</label><br />
                            <div>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='register-container-item'>
                            <label>E-mail</label><br />
                            <div>
                                <input type="text" />
                            </div>
                        </div>

                        <div className='register-container-item'>
                            <label>Password</label><br />
                            <div>
                                <input type="password" />
                            </div>
                        </div>

                        <div className='register-container-item'>
                            <label>Confirm password</label><br />
                            <div>
                                <input type="password" />
                            </div>
                        </div>
                    </div>

                    <div className='register-btn'>
                        <button type='submit'>Register</button>
                    </div>

                    <div className='register-link'>
                        <span>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;