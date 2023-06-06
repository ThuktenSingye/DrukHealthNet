// import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";

const useViewContext = () =>{
    const context = useContext(ViewContext)

    if (context === undefined){
        throw new Error("useAuthContext must be inside a AuthContextProvider")
    }
    return context
}
export default useViewContext