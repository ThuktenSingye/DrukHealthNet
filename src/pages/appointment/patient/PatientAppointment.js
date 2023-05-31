import React from 'react'
import './PatientAppointment.css'
import BannerApp from '../../../components/appointment/BannerApp'
import Doctor from '../../../components/appointment/Doctor'
import DoctorFilter from '../../../components/appointment/DoctorFilter'
import AppRequest from '../../../components/appointment/AppRequest'
import AppointmentMade from '../../../components/appointment/AppointmentMade'
import { AppointmentProvider } from '../../../context/AppointmentContext'
// import { useState } from 'react'
function PatientAppointment() {

  return (
    <div className='patientApp'>
        <BannerApp />
        {/* doctor section compoent */}
        <DoctorFilter />
        <AppointmentProvider>
          <Doctor />
        </AppointmentProvider>
        {/* appointment request */}
        <AppRequest type='request'/>
        {/* appointment section */}
        <AppointmentMade/>

    </div>
  )
}

export default PatientAppointment