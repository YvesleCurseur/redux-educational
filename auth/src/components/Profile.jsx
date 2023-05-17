import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const user = useSelector(state => state.user.value)
  const themeColor = useSelector(state => state.theme.value)

  return (
    <div style={{ color: themeColor }}>
        <h1>Profile</h1>
        <p>This is the profile page of {user.name}</p>
    </div>
  )
}

export default Profile