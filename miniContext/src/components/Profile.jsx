import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  )
}

export default Profile