import React from 'react'
import TextField from '@mui/material/TextField';
// import PatientDetails from './PatientDetails';
function Textarea({id, label}) {
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
        
            variant="outlined"
            />
     
        
    </div>
  )
}

export default Textarea