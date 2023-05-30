import { useState } from 'react'
import {createContext, useEffect} from 'react'

export const AppointmentContext = createContext()

export const AppointmentProvider = ({children}) =>{

    const [showAppointmentForm, setShowAppointmentForm] = useState(false)  // state to display appointment form
    const [appointment,setAppointment] = useState([]) // state to hold appointment data

    const toggleAppointmentForm = () =>{
        setShowAppointmentForm(!showAppointmentForm)
    }
    //  let skip for appointment

    const appointmentContext = {
        showAppointmentForm,
        toggleAppointmentForm, 
        setAppointment,
        appointment
    }
    return(
        <AppointmentContext.Provider value={appointmentContext}>
            {children}
        </AppointmentContext.Provider>
    )

}