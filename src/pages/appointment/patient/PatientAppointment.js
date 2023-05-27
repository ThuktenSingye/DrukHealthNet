import React from 'react'
import './PatientAppointment.css'
import BannerApp from '../../../components/appointment/BannerApp'
import Doctor from '../../../components/appointment/Doctor'
import DoctorFilter from '../../../components/appointment/DoctorFilter'
import AppRequest from '../../../components/appointment/AppRequest'
import AppointmentMade from '../../../components/appointment/AppointmentMade'
function PatientAppointment() {
  return (
    <div className='patientApp'>
        <BannerApp />
        {/* doctor section compoent */}
        <DoctorFilter />
        <Doctor />
        {/* appointment request */}
        <AppRequest />
        {/* appointment section */}
        <AppointmentMade/>

    </div>
  )
}

export default PatientAppointment