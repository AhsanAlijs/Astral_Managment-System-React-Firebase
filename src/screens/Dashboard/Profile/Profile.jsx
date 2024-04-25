import React from 'react'
import ProfileComponent from '../../../components/Profile'
import { useAuth } from '../../AuthProvider'

const Profile = () => {


  const { user } = useAuth();
  console.log(user);







  return (
    <>
      <ProfileComponent name={user.name} image={user.imageUrl} person={user.type} />
    </>
  )
}

export default Profile
