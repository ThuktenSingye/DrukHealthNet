import { useState , useEffect} from "react"
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { projectAuth, projectStorage, projectFirestore } from "../firebase/config"
import { useNavigate } from "react-router-dom"

// import context for authentication
import useAuthContext from "./useAuthContext"
import { Timestamp,setDoc , doc, collection} from "firebase/firestore"
// import {collection, doc, setDoc} from 'firebase/firestore';

const useSignup = () =>{
    const [isCancelled, setIsCancelled]= useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    const doctorCid =[11516000972,10313000983,11608000813,]

    const signup = async (formDetails, imageSrc) =>{
        // const displayName = formDetails.displayName
        setError(null)
        setIsPending(true)
        try{
            const res = await createUserWithEmailAndPassword(projectAuth, formDetails.email, formDetails.password)
            const user = res.user
            //  store user info

            const userData = {
                ...formDetails,
                type: doctorCid.includes(formDetails.cid) ? 'doctor': 'patient',
                createdAt :Timestamp.fromDate(new Date())

            }
            // upload picture to 
            const uploadPath = `profileImage/${user.uid}/${imageSrc.name}`
            const imgRef = ref(projectStorage, uploadPath)

            await uploadBytes(imgRef, imageSrc).then((snapshot)=>{
                console.log("Succefully uploaded image ")
                
            }).catch(err=>{
                console.log(err.message)
            })
            await setDoc(doc(collection(projectFirestore, 'users'), user.uid), userData).then(()=>{
                console.log("Succesfully upload ")
            }).catch(err=>{
                throw new Error('Error while updating')
            })

            dispatch({type:'SIGN_UP', payload: user})

            if (!isCancelled){
                setIsPending(false)
                setError(null)
                navigate('/login')
            }
        }catch(err){
            if (!isCancelled){
                setIsPending(false)
                setError(null)
            }
        }
    }
    useEffect(()=>{
        return ()=> setIsCancelled(true)
    },[])
    return {error, isPending, signup}
}
export default useSignup