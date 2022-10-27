import { gql, useQuery } from '@apollo/client'

import loupe from '../../Imgs/loupe.png'

const GET_USERS = gql`
  query getUsers {
    getUsers {
      username
      email
      createdAt
    }
  }
`

function Chatbox() {
    const { loading, data, error } = useQuery(GET_USERS)

    if (error) {
        console.log(error)
    }

    if (data) {
        console.log(data)
    }

    let usersMarkup

    if (!data || loading) {
        usersMarkup = <p>Loading..</p>
    } else if (data.getUsers.length === 0) {
        usersMarkup = <p>No users have joined yet</p>
    } else if (data.getUsers.length > 0) {
        usersMarkup = data.getUsers.map((user) => (
            <div className="chatbox-container-item">
                <div className='chatbox-container-item-avatar'>

                </div>

                <div style={{height: '100%'}}>
                    <div className='chatbox-container-item-name'>
                        {user.username}
                    </div>

                    <div className='chatbox-container-item-message'>
                        ....
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className='chatbox'>
            <div className="chatbox-title">
                CHAT BOX

                <img />
            </div>

            <div className="chatbox-search">
                <input type="text" placeholder='検索...'/>

                <div>
                    <img src={loupe} />
                </div>
            </div>

            <div className="chatbox-container">
                <div className="chatbox-container-items">
                    {usersMarkup}
                </div>
            </div>
        </div>
    );
}

export default Chatbox;