import { useState } from 'react';
import { Link } from 'react-router-dom'

import Explore from '../../Components/Explore';

function Login() {

    const [variables, setVariables] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(variables);
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
                                    <input type="text" value={variables.username} onChange={(e) => setVariables({ ...variables, username: e.target.value})} />
                                </div>
                            </div>

                            <div className='login-container-item'>
                                <label>パスワード</label><br />
                                <div>
                                    <input type="password" value={variables.password} onChange={(e) => setVariables({ ...variables, password: e.target.value})} />                                                                                                                                                                                                                                                                            
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