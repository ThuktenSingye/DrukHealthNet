import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import './HealthDetail.css'

import Checkbox from '@mui/material/Checkbox';

function HealthDetails(props) {
  const [checked, setChecked] = React.useState(false);
  const { name,  onChange } = props;
  
  const [diagnosis, setDiagnosis] = useState('')
  const [symptoms, setSymptom] = useState('')
  const [medication, setMedication] = useState('')
  const [advices, setAdvices]= useState('')
  const [temp, setTemp]= useState('')
  const [heartRate, setHeartRate]= useState('');
  const [bp, setBp]= useState('')

    function handleHealthDetailChange() {
        const updatedPatientDetail = {
          diagnosis: diagnosis,
          symptoms: symptoms.split(','),
          medication: medication.split(','),
          advices: advices.split(','),
          temp: temp,
          heartRate: heartRate,
          bp: bp}
        onChange(name, updatedPatientDetail);
      }

  const handleChange = (event) => {
    setChecked(!checked);
  };


  return (
    <div className='healthDetails '>
      <h3>Health Checkup</h3>
      <div className="healthSymp ">
        <TextField
          id="outlined-password-input"
          label="Diagnosis"
          variant='outlined'
          autoComplete="current-password"
          className='mb-2'
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          onBlur={handleHealthDetailChange}  
        />
        <TextField
            id='symptoms-content'
            label='Symptoms'
            placeholder='Enter Symptoms'
            fullWidth
            required
            multiline
            rows={4}     
            variant="outlined"
            value={symptoms}
            onChange={(e)=>setSymptom(e.target.value)}
            onBlur={handleHealthDetailChange}
            />
        {/* // <Textarea id={'symptom-content'} label={'Symptoms'} symptoms={symptoms} setSymptom={setSymptom}/> */}
      </div>
      <div className="vital_sign ">
        <p>Vital Sign Checkup ? <Checkbox
          aria-label='Vital sign'
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        /></p>
        {checked && <>
          <TextField id='temp' 
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                &deg;F
                </InputAdornment>
            ),
            }}
            variant='standard'
            label='Temperature'
            type="number"
            value={temp}
            onChange={(e)=>setTemp(e.target.value)}
            onBlur={handleHealthDetailChange} 
        />
           <TextField id='heartrate'
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                  mm Hg
                </InputAdornment>
            ),
            }}
            variant='standard'
            label='HeartRate'
            type="number"
            value={heartRate}
            onChange={(e)=>setHeartRate(e.target.value)}
            onBlur={handleHealthDetailChange} 
        />
           <TextField id='bp' 
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                bpm
                </InputAdornment>
            ),
            }}
            variant='standard'
            label='Blood Pressure'
            type="number"
            value={bp}
            onChange={(e)=>setBp(e.target.value)}
            onBlur={handleHealthDetailChange}  
            
        />
          {/* <VitalSignTextField id={'temp'} label={'Temperature'} reg={'&deg;F'} temp={temp} setTemp={setTemp}/>
          <VitalSignTextField id={'hrate'} label={'Heart Rate'} reg={'mm Hg'} heartRate={heartRate} setHeartRate={setHeartRate}/>
          <VitalSignTextField id={'bp'} label={'Blood Pressure'} reg={'bpm'} bp={bp} setBp={setBp}/> */}
        </>
        }

      </div>

      <div className="medication">
        <p>Medication</p>
        <TextField
            id='medication-content'
            label='Medication'
            placeholder='Enter Medication'
            fullWidth
            required
            multiline
            rows={4}     
            variant="outlined"
            value={medication}
            onChange={(e)=>setMedication(e.target.value)}
            onBlur={handleHealthDetailChange} 
            />
             <TextField
            id='Advices-content'
            label='Advices'
            placeholder='Enter Advices'
            fullWidth
            required
            multiline
            rows={4}     
            variant="outlined"
            value={advices}
            onChange={(e)=>setAdvices(e.target.value)}
            onBlur={handleHealthDetailChange}  
            />
        
      </div>
    </div>
  )
}

export default HealthDetails