import { useState } from 'react';
import { Link } from 'react-router-dom'

function Register() {

    const [formvalue, setFormvalue] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formvalue);
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
                                    <input type="text" value={formvalue.username} onChange={(e) => setFormvalue({ ...formvalue, username: e.target.value})} />
                                </div>
                            </div>

                            <div className='register-container-item'>
                                <label>E-mail</label><br />
                                <div>
                                    <input type="email" value={formvalue.email} onChange={(e) => setFormvalue({ ...formvalue, email: e.target.value})} />
                                </div>
                            </div>

                            <div className='register-container-item'>
                                <label>Password</label><br />
                                <div>
                                    <input type="password" value={formvalue.password} onChange={(e) => setFormvalue({ ...formvalue, password: e.target.value})} />
                                </div>
                            </div>

                            <div className='register-container-item'>
                                <label>Confirm password</label><br />
                                <div>
                                    <input type="password" value={formvalue.confirmpassword} onChange={(e) => setFormvalue({ ...formvalue, confirmpassword: e.target.value})} />
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