import React,{useState,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const[signInForm,setSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null);
    const toggleSignInForm = () =>{
      setSignInForm(!signInForm)
    }
    const name = useRef(null)
    const email =useRef(null)
    const password =useRef(null)

    const handleButtonClick = () =>{
      const message =checkValidData(email.current.value,password.current.value)
      console.log(email.current.value,password.current.value)
      console.log(message);
      setErrorMessage(message);
      if(message) return;
      
      if(!signInForm){
        //sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
          //signed in
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName:name.current.value, photoURL:"http://google.com/photos/default.jpg"
          }).then(()=>{
            navigate('/browse')
          }

          )
         }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
            setErrorMessage(errorCode + "-" +errorMessage)
         })


      }else{
        //Sign In Logic
        signInWithEmailAndPassword(auth , email.current.value, password.current.value)
         .then((userCredential) =>{
          const user = userCredential.user;
          console.log(user); 
          navigate('/browse')
         })
         .catch((error)=>
         {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" +errorMessage)
         })

      }

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