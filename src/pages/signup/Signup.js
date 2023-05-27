import React from 'react'
// import CustomTextField from './CustomTextField';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import Field from '../../components/loginComponent/Field';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import log from '../../images/login_signup.png'
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Signup.css'
// import useSignup hook
import useSignup from '../../hooks/useSignup';
import { event } from 'jquery';

function Signup() {
  const{error, isPending, signup}= useSignup();

  const signupSubmit = (e)=>{
    e.preventDefault()
    // form validation
    signup(formDetails)

  }
  // store the form detial
  const [formDetails, setFormDetials]= useState({
    userName:'',
    displayName:'',
    cid: '',
    contactNo:'',
    gender:'',
    age:'',
    email:'',
    password:'',
    confirm_pwd:''
  })
  const handleformchange = (fieldName, fieldValue) => {
    setFormDetials({
      ...formDetails,
      [fieldName]: fieldValue,
    });
  };
  // console.log(gender)
  return (
    <div className='signup d-flex justify-content-center align-items-center' style={{
      background: `url(${log}) no-repeat center/cover`
    }}>
      <form action="" className='signup_form d-flex flex-column gap-2 justify-content-center align-item-center'>
        <div className="name ">
          <Field label="Full Name" name='userName' type="text" onChange={handleformchange}  required />
        </div>
        <div className="displayName ">
          <Field label="DisplayName" name='displayName' type="text" onChange={handleformchange}  required />
        </div>
        <div className="CID">
          <Field label="CID" type="text" name='cid' onChange={handleformchange}  required />
        </div>
        <div className="phone">
          <Field label="Phone Number" type="text" name='contactNo' icon={<PhoneEnabledIcon />} onChange={handleformchange}  required  />
        </div>
        <div className='ageGender d-flex  justify-content-between align-items-center'>
          
          <TextField  label="Age"  sx={{width: 100}}  name='age' type='number' onChange={(e)=>handleformchange('age', e.target.value)} required size='small'  />
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Gender</InputLabel>
            <Select
              value={formDetails.gender}
              label="Gender"
              onChange={(e)=>handleformchange('gender', e.target.value)}
              name='gender'
            >
              <MenuItem value="" className='rounded-0'>
                <em>None</em>
              </MenuItem>
              <MenuItem value='Male' className='rounded-0'>Male</MenuItem>
              <MenuItem value='Female' className='rounded-0'>Female</MenuItem>
              <MenuItem value='Other' className='rounded-0'>Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="Email">
          <Field label="Email" type="email" name='email' icon={<EmailIcon />} onChange={handleformchange}   required/>
        </div>
        <div className="pwd">
          <Field label="Password" type="password" name='password' onChange={handleformchange}  required />
        </div>
        <div className="confirm_pwd">
          <Field label="Confirm Password" onChange={handleformchange} name='confirm_pwd' type="password"   required/>
        </div>
        <Button variant="outlined" size="medium" onClick={signupSubmit} className='rounded-4 mt-3 text-black bg-white' disabled={isPending} >
          Register
        </Button>
      </form>
    </div>
  )
}
export default Signup