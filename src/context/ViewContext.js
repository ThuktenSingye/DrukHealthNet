import { useState } from 'react'
import {createContext, useEffect} from 'react'

export const ViewContext = createContext()

export const ViewProvider = ({children}) =>{

    const [showDetail, setShowDetail] = useState(false)  // state to display appointment form
    // const [appointment,setAppointment] = useState([]) // state to hold appointment data

    const toggleShowDetail = () =>{
        setShowDetail(!showDetail)
    }
    //  let skip for appointment

    const detailContext = {
        showDetail,
        toggleShowDetail, 
        setShowDetail,
    }
    return(
        <ViewContext.Provider value={detailContext}>
            {children}
        </ViewContext.Provider>
    )

}