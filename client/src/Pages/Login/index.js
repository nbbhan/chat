import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { gql, useLazyQuery } from '@apollo/client'

import Explore from '../../Components/Explore';

const LOGIN_USER = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      createdAt
      token
    }
  }
`

function Login() {

    const navigate = useNavigate()

    const [variables, setVariables] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({})

    const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
        onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
        onCompleted(data) {
            localStorage.setItem('token', data.login.token)
            navigate('/')
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        loginUser({ variables })
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
                                <label className={errors.username && 'text-danger'}>{errors.username ?? 'ユーザー名'}</label><br />
                                <div>
                                    <input type="text" className={errors.username && 'is-invalid'} value={variables.username} onChange={(e) => setVariables({ ...variables, username: e.target.value})} />
                                </div>
                            </div>

                            <div className='login-container-item'>
                                <label className={errors.password && 'text-danger'}>{errors.password ?? 'パスワード'}</label><br />
                                <div>
                                    <input type="password" className={errors.password && 'is-invalid'} value={variables.password} onChange={(e) => setVariables({ ...variables, password: e.target.value})} />                                                                                                                                                                                                                                                                            
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