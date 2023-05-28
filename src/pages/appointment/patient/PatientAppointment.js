import React from 'react'
import './PatientAppointment.css'
import BannerApp from '../../../components/appointment/BannerApp'
import Doctor from '../../../components/appointment/Doctor'
import DoctorFilter from '../../../components/appointment/DoctorFilter'
import AppRequest from '../../../components/appointment/AppRequest'
import AppointmentMade from '../../../components/appointment/AppointmentMade'
import { useState } from 'react'
function PatientAppointment() {
  const [openAppointment, setOpenAppointment] = useState(false)
  console.log("Open Appointment", openAppointment)
  
  return (
    <div className='patientApp'>
        <BannerApp />
        {/* doctor section compoent */}
        <DoctorFilter />
        <Doctor openAppointment={openAppointment} toggleAppointmentForm ={()=> setOpenAppointment(!openAppointment)}/>
        {/* appointment request */}
        <AppRequest type='request'/>
        {/* appointment section */}
        <AppointmentMade/>

    </div>
  )
}

export default PatientAppointment