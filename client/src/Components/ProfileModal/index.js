import { useContext, useState, useEffect, useRef } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'

import { Data } from '~/Provider'

const CHANGE_PROJECT = gql`
    mutation ChangeProfile($user: String!, $img: String, $profileName: String, $address: String) {
        changeProfile(user: $user, img: $img, profileName: $profileName, address: $address) {
            imageUrl
            username
            getPoint
            follow
            createdAt
            buyPoint
            address
            profileName
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
            address
            profileName
        }
    }
`

function ProfileModal() {
    const myData = useContext(Data)

    const { data } = useQuery(GET_PROFILE)

    const imgRef = useRef()

    const profileRef = useRef()

    const addressRef = useRef()

    const [changeProject] = useMutation(CHANGE_PROJECT)

    const [variables, setVariables] = useState({
        user: '',
    })

    const handleChange = (method, object) => {
        setVariables((prevState) => {
            return prevState
        })
        setVariables((prevState) => {
            switch (method) {
                case 'img':
                    prevState = {
                        img: object.img,
                        user: object.user,
                    }
                    break
                case 'profileName':
                    prevState = {
                        profileName: object.profileName,
                        user: object.user,
                    }
                    break
                case 'address':
                    prevState = {
                        address: object.address,
                        user: object.user,
                    }
                    break
            }

            let newPrevState = prevState

            return newPrevState
        })
    }

    useEffect(() => {
        if (variables.user != '') {
            changeProject({ variables })
        }
    }, [variables])

    const storage = window.localStorage.getItem('theme')

    return (
        <div className="profileModal" style={{ display: `${myData.pm}` }}>
            <div className={`profileModal-main ${storage}`}>
                <div className="profileModal-container">
                    <div className="profileModal-close" style={{ padding: '10px 20px 10px 20px' }}>
                        <div className="profileModal-container-title">プロフィールを編集</div>
                    </div>

                    <div className="profileModal-container-items">
                        <div
                            className="profileModal-container-item"
                            onClick={() => {
                                imgRef.current.style.display = 'block'
                                profileRef.current.style.display = 'none'
                                addressRef.current.style.display = 'none'
                            }}
                        >
                            ・プロフィール画像を変更
                        </div>
                        <div
                            className="profileModal-container-item"
                            onClick={() => {
                                imgRef.current.style.display = 'none'
                                profileRef.current.style.display = 'block'
                                addressRef.current.style.display = 'none'
                            }}
                        >
                            ・アカウント名を変更
                        </div>
                        <div
                            className="profileModal-container-item"
                            onClick={() => {
                                imgRef.current.style.display = 'none'
                                profileRef.current.style.display = 'none'
                                addressRef.current.style.display = 'block'
                            }}
                        >
                            ・住所を変更
                        </div>
                    </div>

                    <div className="profileModal-container-item" ref={imgRef} style={{ display: 'none' }}>
                        <input
                            placeholder="画像URLを入力..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleChange('img', {
                                        img: e.target.value,
                                        user: data && data.getProfile[0].username,
                                    })

                                    myData.handlePM()

                                    window.location.reload()
                                }
                            }}
                        />
                    </div>

                    <div className="profileModal-container-item" ref={profileRef} style={{ display: 'none' }}>
                        <input
                            placeholder="アカウント名を入力..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleChange('profileName', {
                                        profileName: e.target.value,
                                        user: data && data.getProfile[0].username,
                                    })

                                    myData.handlePM()

                                    window.location.reload()
                                }
                            }}
                        />
                    </div>

                    <div className="profileModal-container-item" ref={addressRef} style={{ display: 'none' }}>
                        <input
                            placeholder="住所を入力..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleChange('address', {
                                        address: e.target.value,
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
                            className="profileModal-close-container"
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
