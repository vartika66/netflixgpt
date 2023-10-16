import React,{useState,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
const Login = () => {
  const[signInForm,setSignInForm] = useState(true)
    const toggleSignInForm = () =>{
      setSignInForm(!signInForm)
    }
    const email =useRef(null)
    const password =useRef(null)

    const handleButtonClick = () =>{
      const message =checkValidData(email.current.value,password.current.value)
      console.log(email.current.value,password.current.value)
      console.log(message);

    }
  return (
    
    <>
    <Header/>
     <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 p-12 my-36 mx-auto left-0 right-0 absolute bg-black text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4 m-2'>{signInForm ? "Sign In":"Sign Up"}</h1>
      {!signInForm && <input type='text' placeholder='Full Name' className='bg-gray-700 p-2 my-2 w-full'/>}
      <input ref={email} type='text' placeholder='Email Address' className='bg-gray-700 p-2 my-2 w-full'/>
      <input ref ={password} type='password'placeholder='Password' className='bg-gray-700 p-2 my-4 w-full'/>
      <button className='p-4 my-4 w-full bg-red-700 rounded-lg' onClick={handleButtonClick}>{signInForm ? "Sign In":"Sign Up"}</button>
      <div className='flex'>
      <p>{signInForm?"New to netflix ":"Already a user "}</p><p className='cursor-pointer mx-2' onClick={toggleSignInForm}>{signInForm?"Sign Up":"Sign In"}
      </p>
      </div>
        
    </form>
    </>
  )
}

export default Login