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
    const { name,  onChange } = props;
    const [cid, setCid] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    function handlePatientDetailChange() {
        const updatedPatientDetail = {
          cid: cid,
          phone: phone,
          date: date}
        onChange(name, updatedPatientDetail);
      }
  return (
    <div className='patientDetail d-flex flex-column align-item-between justify-content-center  gap-2'>
        <h2>Patient Details</h2>
        <div className='d-flex justify-content-between gap-1'>
           <div className='name d-flex justify-content-between gap-1'>
                <TextField id="outlined-basic" label="CID" variant="outlined" placeholder='Enter you CID' 
                value={cid} 
                onChange={(e)=>setCid(e.target.value)}
                onBlur={handlePatientDetailChange} // call the onChange function when the field loses focus
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
             
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                onBlur={handlePatientDetailChange}  
                />
           </div>
            <TextField id="outlined-basic" label="" variant="outlined" type="datetime-local" className='flex-1' 
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            onBlur={handlePatientDetailChange}
            />
        </div>
        <Divider/>

    </div>
  )
}

export default PatientDetails