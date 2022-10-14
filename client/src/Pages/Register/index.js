import { Link } from 'react-router-dom'

function Register() {

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('a');
    }

    return (
        <>
            <div className='register'>
                <div className='register-container'>
                    <div className='register-container-title'>Register</div>

                    <form onSubmit={e => handleSubmit(e)}>
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
                    </form>

                    <div className='register-link'>
                        <span>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;