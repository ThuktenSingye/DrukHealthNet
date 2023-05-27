import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
function VitalSignTextField({id, label, reg}) {
  return (
    <div>
     
        <TextField id={id} 
          // error
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
            // InputLabelProps={{
            // shrink: true,
            // }}
        />
    </div>
  )
}

export default VitalSignTextField