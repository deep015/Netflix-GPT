import React ,{useState}from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div >
       <Header />
    <div className='absolute'>
    
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_small.jpg" alt="" />
        </div>
        <form className='absolute w-3/12 p-12 my-40 mx-auto left-0 right-0 bg-black bg-opacity-50 text-white rounded'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ?'Sign In':'Sign Up'}</h1>
            <input type="email" placeholder='Enter Email ' className='bg-gray-800 text-gray-200 p-2 m-2 w-full border-1 border-gray-400 rounded'/>
            <input type="password" placeholder='Password' className='bg-gray-800 text-gray-200 p-2 m-2 w-full rounded border-gray-400 border-1'/>
            <button className='p-2 m-2 bg-red-700 w-full rounded'>{isSignInForm ?'Sign In':'Sign Up'}</button>
            <p className='p-2 m-4 text-white' onClick={toggleSignInForm}>New to Netflix? Sign Up Now</p>
        </form>
    </div>
  )
}

export default Login