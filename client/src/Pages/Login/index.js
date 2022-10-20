import { useState } from 'react';
import { Link } from 'react-router-dom'

import Explore from '../../Components/Explore';

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
            <Explore/>

            <div className='login'>
                <div className='login-container'>
                    <div className='login-container-title'>ログイン</div>

                    <form onSubmit={e => handleSubmit(e)}>
                        <div className='login-container-items'>
                            <div className='login-container-item'>
                                <label>ユーザー名</label><br />
                                <div>
                                    <input type="text" value={formvalue.username} onChange={(e) => setFormvalue({ ...formvalue, username: e.target.value})} />
                                </div>
                            </div>

                            <div className='login-container-item'>
                                <label>パスワード</label><br />
                                <div>
                                    <input type="password" value={formvalue.password} onChange={(e) => setFormvalue({ ...formvalue, password: e.target.value})} />                                                                                                                                                                                                                                                                            
                                </div>
                            </div>
                        </div>

                        <div className='login-btn'>
                            <button type='submit'>ログイン</button>
                        </div>
                    </form>

                    <div className='login-link'>
                        <span><Link to="/register">まだアカウントをお持ちでない方</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;