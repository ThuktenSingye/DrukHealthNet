import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
function VitalSignTextField({id, label, reg}) {
  return (
    <div>
     
        <TextField id={id} 
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                {reg}
                </InputAdornment>
            ),
            }}
            variant='standard'
            label={`${label}`}
            type="number"
            
        />
    </div>
  )
}

export default VitalSignTextField