import React from 'react'
import TextField from '@mui/material/TextField';
import Textarea from './Textarea';
import VitalSignTextField from './VitalSignTextField';
import './HealthDetail.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function HealthDetails(props) {
  const [checked, setChecked] = React.useState(false);

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
          value={props.diagnosis}
          onChange={(e) => props.setDiagnosis(e.target.value)}
        />
        <Textarea id={'symptom-content'} label={'Symptoms'} />
      </div>
      <div className="vital_sign ">
        <p>Vital Sign Checkup ? <Checkbox
          aria-label='Vital sign'
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        /></p>
        {checked && <>
          <VitalSignTextField id={'temp'} label={'Temperature'} reg={'&deg;F'} />
          <VitalSignTextField id={'hrate'} label={'Heart Rate'} reg={'mm Hg'} />
          <VitalSignTextField id={'bp'} label={'Blood Pressure'} reg={'bpm'} />
        </>
        }

      </div>

      <div className="medication">
        <p>Medication</p>
        <Textarea id={'medication-content'} label={'Medications'} className='mb-4' />
        <Textarea id={'advices-content'} label={'Advices'} />
      </div>
    </div>
  )
}

export default HealthDetails