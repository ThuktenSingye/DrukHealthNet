import React from 'react'
import './DoctorAppointment.css'
// import Doctor from '../../../components/appointment/Doctor'
import Request from '../../../components/appointment/Request'
import AppRequest from '../../../components/appointment/AppRequest'
import AppointmentMade from '../../../components/appointment/AppointmentMade'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { AppointmentProvider } from '../../../context/AppointmentContext'
import { ViewProvider } from '../../../context/ViewContext'
function DoctorAppointment({type}) {
  return (
    <AppointmentProvider>
      <div className='docterApp'>
        {/* patient appointment request */}
        <h1 className='ms-2 mt-2 p-0'>Patient Appointment</h1>
        <Request type='patient' className='m-0 p-0'/>
        {/* appointment request to , request you have made*/}
        <ViewProvider>
          <AppRequest type={type}/>
        </ViewProvider>
        {/* appointment list, scheduled appointment */}
        <AppointmentMade type={type}/>
      </div>
    </AppointmentProvider>
  )
}

export default DoctorAppointment