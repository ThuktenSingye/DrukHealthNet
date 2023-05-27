import React, { useState } from 'react'
import './Login.css'
import Field from '../../components/loginComponent/Field'
import { Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import log from '../../images/login_signup.png'
import useLogin from '../../hooks/useLogin';

function Login() {
  const {error, isPending, login} = useLogin()

  const loginSubmit = (e)=>{
    e.preventDefault()
    login(loginDetials)
    
  }
  const [loginDetials, setLoginDetials]= useState({
    email:'',
    password:''
  })
  const handleformchange = (fieldName, fieldValue) => {
    setLoginDetials({
      ...loginDetials,
      [fieldName]: fieldValue,
    });
  };
  
  return (
    <div className='login  d-flex justify-content-center align-items-center' style={{
      background: `url(${log}) no-repeat center/cover`
    }}>
      <form action="" className='login_form d-flex flex-column gap-2 justify-content-center align-item-center'>
        <h1 className='text-center'>Login</h1>
        <div className="Email">
          <Field label="Email" type="email"  onChange={handleformchange} name='email' icon={<EmailIcon />} required/>
        </div>
        <div className="pwd">
          <Field label="Password" type="password" name='password' onChange={handleformchange} required />
        </div>
          <Button variant="outlined" size="medium" onClick={loginSubmit} className='rounded-4 mt-3 text-black bg-white'>
            Login
          </Button>
        </form>
    </div>
  )
}

export default Login