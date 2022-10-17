import { useState } from 'react';
import { Link } from 'react-router-dom'

function Login() {

    const [formvalue, setFormvalue] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formvalue);
    }

    return ( 
        <>
            <div className='login'>
                <div className='login-container'>
                    <div className='login-container-title'>Login</div>

                    <form onSubmit={e => handleSubmit(e)}>
                        <div className='login-container-items'>
                            <div className='login-container-item'>
                                <label>Username</label><br />
                                <div>
                                    <input type="text" value={formvalue.username} onChange={(e) => setFormvalue({ ...formvalue, username: e.target.value})} />
                                </div>
                            </div>

                            <div className='login-container-item'>
                                <label>Password</label><br />
                                <div>
                                    <input type="password" value={formvalue.password} onChange={(e) => setFormvalue({ ...formvalue, password: e.target.value})} />                                                                                                                                                                                                                                                                            
                                </div>
                            </div>
                        </div>

                        <div className='login-btn'>
                            <button type='submit'>Login</button>
                        </div>
                    </form>

                    <div className='login-link'>
                        <span>Create a new account! <Link to="/register">Register</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;