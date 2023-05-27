import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { Divider } from '@mui/material';
import './PatientDetail.css'
function PatientDetails(props) {
    
  return (
    <div className='patientDetail d-flex flex-column align-item-between justify-content-center  gap-2'>
        <h2>Patient Details</h2>
        <div className='d-flex justify-content-between gap-1'>
           <div className='name d-flex justify-content-between gap-1'>
                {/* <TextField id="outlined-basic" label="First Name" variant="outlined" 
                //  onChange={(e)=>setPatientName(e.target.value)}
                 />
                <TextField id="outlined-basic" label="Second Name" variant="outlined" /> */}
                <TextField id="outlined-basic" label="CID" variant="outlined" placeholder='Enter you CID' 
                value={props.cid} onChange={(e)=>props.setCid(e.target.value)}
                />
                <TextField id="outlined-number" 
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        975
                    </InputAdornment>
                    ),
                }}
                label="Phone"
                type="number"
                // InputLabelProps={{
                //     shrink: true,
                // }}
                value={props.contactNo}
                onChange={(e)=>props.setContactNo(e.target.value)}

                />
           </div>
            <TextField id="outlined-basic" label="" variant="outlined" type="datetime-local" className='flex-1' 
            value={props.date}
            onChange={(e)=> props.setDate(e.target.value)}
            />
        </div>
        {/* <Divider/> */}
        {/* <div className='d-flex justify-content-between align-items-center gap-1'>
            <TextField id="outlined-basic" label="ID" variant="outlined" />
            <TextField id="outlined-basic" label="Address" variant="outlined" />
            <TextField id="outlined-number" 
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        975
                    </InputAdornment>
                    ),
                }}
                label="Phone"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />
        </div> */}
        
        {/* <Divider/>
           
        <div className="user-details-bottom d-flex justify-content-between align-items-center">
            <TextField id="outlined-basic" label="Address" variant="outlined" className='flex-1' />
            <FormControl className=''>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </div> */}
        
        <Divider/>

    </div>
  )
}

export default PatientDetails