import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'

const Header = () => {
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth).then(() =>{
       navigate("/")
    }

    ).catch((error)=>{
      navigate("/error")
    })
  }
  return (
    
  
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    
    <div className='flex p-2'>
      <img alt="signoutlogo" className="w-12 h-12" src="https://tse4.mm.bing.net/th?id=OIP.edvyHi9I0jsIe2u4qwcSAAAAAA&pid=Api&P=0&h=220"/>
      <button onClick={handleSignOut} className='mx-2 text-red-500 font-bold'>Sign Out</button>
    </div>
    </div>
  )
}

export default Header