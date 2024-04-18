import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button
      className="rounded-md  bg-[#DCDF00] hover:bg-[#DCDF00]/80 px-3 py-2 text-md font-semibold text-black"
      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn