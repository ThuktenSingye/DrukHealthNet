import React from 'react'
import TextField from '@mui/material/TextField';
// import PatientDetails from './PatientDetails';
function Textarea(props) {
  const{id, label, value, setValue} = props
  return (
    <div>
        <TextField
            id={`${id}`}
            label={`${label}`}
            placeholder={`Enter your ${label} here`}
            fullWidth
            required
            multiline
            rows={4}
            value={value}
            onChange={(e)=>setValue(e.target.value)}        
            variant="outlined"
            />
     
        
    </div>
  )
}

export default Textarea