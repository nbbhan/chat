import { useContext, useState, useEffect } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'

import { Data } from '~/Provider'

const CHANGE_PROJECT = gql`
    mutation ChangeProfile($user: String!, $img: String!) {
        changeProfile(user: $user, img: $img) {
            imageUrl
            username
            getPoint
            follow
            createdAt
            buyPoint
        }
    }
`

const GET_PROFILE = gql`
    query getProfile {
        getProfile {
            username
            createdAt
            imageUrl
            buyPoint
            getPoint
            follow
        }
    }
`

function ProfileModal() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PROFILE)

    const [changeProject] = useMutation(CHANGE_PROJECT)

    const [variables, setVariables] = useState({
        productId: '',
        user: '',
    })

    const handleChange = (object) => {
        setVariables((prevState) => {
            return prevState
        })
        setVariables((prevState) => {
            prevState = {
                img: object.img,
                user: object.user,
            }

            let newPrevState = prevState

            return newPrevState
        })
    }

    useEffect(() => {
        if (variables.img != '' && variables.user != '') {
            changeProject({ variables })
        }
    }, [variables])

    const storage = window.localStorage.getItem('theme')

    return (
        <div className="profileModal" style={{ display: `${myData.pm}` }}>
            <div className={`profileModal-main ${storage}`}>
                <div className="profileModal-container">
                    <div className="profileModal-close" style={{ padding: '10px 20px 10px 20px' }}>
                        <div className="profileModal-close-container">プロフィール画像を選択</div>
                    </div>

                    <div className="profileModal-container-item">
                        <input
                            placeholder="Enter your avata.."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleChange({
                                        img: e.target.value,
                                        user: data && data.getProfile[0].username,
                                    })

                                    myData.handlePM()

                                    window.location.reload()
                                }
                            }}
                        />
                    </div>

                    <div className="profileModal-close">
                        <div
                            className="profileModal-close-container" //「プロフィール画像を選択」と「閉じる」どちらもcursor:pointerが起動している
                            onClick={() => {
                                myData.handlePM()
                            }}
                        >
                            閉じる
                            <div className="underline"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal
