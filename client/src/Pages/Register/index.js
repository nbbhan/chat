import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

import Explore from '../../Components/Explore'

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      username
      email
      createdAt
    }
  }
`

function Register() {

    const navigate = useNavigate()

    const [variables, setVariables] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setErrors] = useState({})

    const [registerUser, { loading }] = useMutation(REGISTER_USER, {
        update: (_, __) => navigate('/login'),
        onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
    })

    const handleSubmit = (e) => {
        e.preventDefault()  

        registerUser({ variables })
    }

    return (
        <>
            <Explore />

            <div className='register'>
                <div className='register-container'>
                    <div className='register-container-title'>アカウント作成</div>

                    <form onSubmit={e => handleSubmit(e)}>
                        <div className='register-container-items'>
                            <div className='register-container-item'>
                                <label>ユーザー名</label><br />
                                <div>
                                    <input type="text" value={variables.username} onChange={(e) => setVariables({ ...variables, username: e.target.value})} />
                                </div>
                            </div>

                            <div className='register-container-item'>
                                <label>メールアドレス</label><br />
                                <div>
                                    <input type="email" value={variables.email} onChange={(e) => setVariables({ ...variables, email: e.target.value})} />
                                </div>
                            </div>

                            <div className='register-container-item'>
                                <label>パスワード</label><br />
                                <div>
                                    <input type="password" value={variables.password} onChange={(e) => setVariables({ ...variables, password: e.target.value})} />
                                </div>
                            </div>

                            <div className='register-container-item'>
                                <label>確認</label><br />
                                <div>
                                    <input type="password" value={variables.confirmPassword} onChange={(e) => setVariables({ ...variables, confirmPassword: e.target.value})} />
                                </div>
                            </div>
                        </div>

                        <div className='register-btn'>
                            <button type='submit'>作成</button>
                        </div>
                    </form>

                    <div className='register-link'>
                        <span><Link to="/login">すでにアカウントをお持ちの方</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;