import React from 'react'

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Field.css'
function Field(props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();

    };
    const { label,name, type,icon, onChange, required } = props;
    // const handleFieldChange = (e)=>{
    //   handleChange(name, e.target.value)
    // }
    const handleChange = (event) => {
      if (onChange && typeof onChange === 'function') {
        onChange(name, event.target.value);
      }
    };
  
  return (
    <div>
       <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {icon && (
              <IconButton>
                {icon}
              </IconButton>
            )}
            {type === 'password' && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      variant="standard"
      label={label}
      type={type === 'password' && showPassword ? 'text' : type}
      required={required}
      className='w-100'
      // value={value}
      onChange={handleChange}
      
    />
    </div>
  )
}

export default Field