import React from 'react'
import './PatientAppointment.css'
import BannerApp from '../../../components/appointment/BannerApp'
import Doctor from '../../../components/appointment/Doctor'
import DoctorFilter from '../../../components/appointment/DoctorFilter'
import AppRequest from '../../../components/appointment/AppRequest'
import AppointmentMade from '../../../components/appointment/AppointmentMade'
import { AppointmentProvider } from '../../../context/AppointmentContext'
import AppointmentFrom from '../../../components/appointment/AppointmentFrom'
import { useParams } from 'react-router-dom'
// import { useState } from 'react'
// import { AppointmentProvider } from '../../../context/AppointmentContext'
import { ViewProvider } from '../../../context/ViewContext'
function PatientAppointment() {

  const {id} = useParams;

  return (
    <AppointmentProvider>
      <div className='patientApp'>
          <BannerApp />
          {/* doctor section compoent */}
          <DoctorFilter />
          <AppointmentProvider>
            <Doctor type='patient'/>
          </AppointmentProvider>
          {/* appointment request */}
          <AppRequest type='patient'/>
          <ViewProvider>
            <AppointmentFrom type='patient' />
          </ViewProvider>
          {/* appointment section */}
          <AppointmentMade type='patient'/>
      </div>
    </AppointmentProvider>
  )
}

export default PatientAppointment