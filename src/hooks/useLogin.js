import { useState , useEffect } from "react";
import { projectAuth } from "../firebase/config";
import useAuthContext from "./useAuthContext";
import {signInWithEmailAndPassword} from 'firebase/auth'


const useLogin= () =>{
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)
    const {dispatch, user} = useAuthContext()
    const login= async (loginDetials) =>{
        setError(null)
        setIsPending(true)
        await signInWithEmailAndPassword(projectAuth, loginDetials.email, loginDetials.password).then(()=>{
            console.log("Succesfully login")
            setIsPending(false)
            setError(null)
            dispatch({type: "LOGIN", payload: user})
            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        }).catch(err=>{
            setIsPending(false)
            setError(err.message)
            if (!isCancelled){
                setIsPending(false)
                setError(null)
            }
        })
       
    }
    useEffect(()=>{
        return () => setIsCancelled(true)
    },[])
    return {error, isPending, login}
}
export default useLogin