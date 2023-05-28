import { AppointmentContext } from "../context/AppointmentContext";
import { useContext } from "react";
const useAppointmentContext = () =>{
    const context = useContext(AppointmentContext)

    if (context === undefined){
        throw new Error("useAuthContext must be inside a AuthContextProvider")
    }
    return context
}
export default useAppointmentContext