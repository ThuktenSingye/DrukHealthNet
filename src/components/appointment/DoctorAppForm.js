
import React, { useState , useNavigate} from 'react'
import useAppointmentContext from '../../hooks/useAppointmentContext'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button} from '@mui/material';
import img from '../../images/login_signup.png'
import TextField from '@mui/material/TextField';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InputLabel from '@mui/material/InputLabel';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import './AppForm.css'
import {Timestamp} from 'firebase/firestore'
import useFirestore from '../../hooks/useFirestore';
import useAuthContext from '../../hooks/useAuthContext';
import useFetch from '../../hooks/useFetch';
import { useAsyncError } from 'react-router-dom';
import UpdateIcon from '@mui/icons-material/Update';
function DoctorAppForm() {
    const {showAppointmentForm,toggleAppointmentForm, appointment, setAppointment, } = useAppointmentContext()
    const {user} = useAuthContext()
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [reason, setReason] = useState('')
    const [note, setNote] = useState('')
    const [cid, setCid] = useState('')
    // const {id, patientId, type} = props
    const {addDocument, updateDocument, response} = useFirestore('doctorAppointment')
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white !important',
        borderRadius: '10px',
        opacity: 1,
        zIndex: 1000,
        p: 4,
      };
    function handleChange(){
        const appointmentFormDetails ={
            location:location,
            date: date,
            cid: cid,
            reason: reason,
            note:note
        }
        setAppointment(appointmentFormDetails)
        // handleSubmit
     }
    //  handleubmit to add this appointment to appointment database by default it stype would be request
    const {isPending, error, data} = useFetch({collect:'users'});
     
     const handleSubmit = async (e)=>{
        e.preventDefault()
        // based on cid value you need ot fetch the patient id
        if(data && data.length > 0){
            const patientUser = data.filter((users)=>users.cid===cid) // check if user cid matchec the enter cid
            
            const id = patientUser[0].id // extract id which will be used a patient 
            if (id){
                // console.log("Patient ifm insdie doctorform", id)
                const appointmentData = 
                    {
                        patient_Id: id,
                        doctor_Id: user.uid,
                        status:'request',
                        ...appointment,
                        createdAt :Timestamp.fromDate(new Date())
                    };
                await addDocument(appointmentData)                
            }else{
                console.log("The user is not registered in the appointment")
            }
        }
        // code to add appointment to the firebase you can use useFirestore
        if (!response.error){
            // navigate('/')// not error redirect to dashboard
            console.log("Succefully added to the firebase")
            toggleAppointmentForm()
          }
     }

     const handleUpdate = async (e)=>{
        e.preventDefault()
        // based on cid value you need ot fetch the patient id
        if(data && data.length > 0){
            const patientUser = data.filter((users)=>users.cid===cid) // check if user cid matchec the enter cid
            
            const id = patientUser[0].id // extract id which will be used a patient 
            if (id){
                // console.log("Patient ifm insdie doctorform", id)
                const appointmentData = 
                    {
                        patient_Id: id,
                        doctor_Id: user.uid,
                        status:'request',
                        ...appointment,
                        createdAt :Timestamp.fromDate(new Date())
                    };
                await updateDocument(appointmentData, patientUser[0].id)                
            }else{
                console.log("The user is not registered in the appointment")
            }
        }
        // code to add appointment to the firebase you can use useFirestore
        if (!response.error){
            // navigate('/')// not error redirect to dashboard
            console.log("Succefully updated to the firebase")
            toggleAppointmentForm()
          }
        // console.log("Handle Update")

     }

  return (
    <div className='doctorAppForm'>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={showAppointmentForm}
            onClose={toggleAppointmentForm}
            closeAfterTransition
            slots={{ backdrop: Backdrop}}
            slotProps={{
            backdrop: {
                sx: { opacity: '0.5 !important', backgroundColor:'rgba(0, 0, 0, 0.01) !important', zIndex: 1},
                timeout: 500,
            },
            }}
            >
            <Fade in={showAppointmentForm}>
            <Box sx={style} className='app-wrapper'>
                <form action="" className='app-form-content d-flex flex-column justify-content-center gap-2'>
                    <Typography sx={{textAlign:'center', color:'#6859F3'}} variant='h5'>
                        Schedule Appointment
                    </Typography>
                    <div className='d-flex justify-content-between gap-2'>
                        <div className='location'>
                            <InputLabel htmlFor='loc-input' sx={{color:'#3A4265 '}}>Location:</InputLabel>
                            <TextField
                            id='loc-input'
                            label="Location"
                            variant='outlined'
                            className='mb-2'
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                            onBlur={handleChange}
                            />
                        </div>
                        <div className='app-date'>
                            <InputLabel htmlFor='date-input'sx={{color:'#3A4265 '}}>Date:</InputLabel>
                            <TextField 
                            id="date-input"  
                            variant="outlined" 
                            type="datetime-local" 
                            className='flex-1'
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}  
                            onBlur={handleChange}/>
                        </div>
                    </div>
                    <div className='cid'>
                        <InputLabel htmlFor='reason-input' sx={{color:'#3A4265 '}}>CID:</InputLabel>
                        <TextField
                            id='reason-input'
                            label="CID"
                            variant='outlined'
                            className='mb-2'
                            value={cid}
                            onChange={(e)=>setCid(e.target.value)}  
                            onBlur={handleChange}
                        />
                    </div>
                   
                    <div className='reason'>
                        <InputLabel htmlFor='reason-input' sx={{color:'#3A4265 '}}>Reason:</InputLabel>
                        <TextField
                            id='reason-input'
                            label="Reason"
                            variant='outlined'
                            className='mb-2'
                            value={reason}
                            onChange={(e)=>setReason(e.target.value)}  
                            onBlur={handleChange}
                        />
                    </div>

                    <div className='note'>
                        <InputLabel htmlFor='note-input' sx={{color:'#3A4265 '}}>Note:</InputLabel>
                        <TextField
                        id='note-input'
                        label='Note'
                        placeholder='Additional note'
                        fullWidth
                        required
                        multiline
                        rows={4}     
                        variant="outlined"
                        value={note}
                        onChange={(e)=>setNote(e.target.value)}
                        onBlur={handleChange}
                        />
                    </div>
                    <div className='d-flex justify-content-end gap-2 mt-3'>
                    <Button sx={{textTransform:'capitalize !important', alignSelf: 'end !important', backgroundColor:'#F4F7FC !important', color:'#6859F3  !important'}} 
                        className='rounded-3 ' 
                        onClick={handleUpdate}
                        >
                        <UpdateIcon className='me-1'/>
                        {/* <CancelIcon className='me-1'/> */}
                        Update</Button>
                        <Button sx={{textTransform:'capitalize !important', alignSelf: 'end !important', backgroundColor:'#F4F7FC !important', color:'#6859F3  !important'}} 
                        className='rounded-3 ' 
                        onClick={toggleAppointmentForm}
                        >
                        <CancelIcon className='me-1'/>
                        Cancel</Button>
                        <Button sx={{textTransform:'capitalize !important', alignSelf: 'end !important', backgroundColor:'##F4F7FC !important', color:'#6859F3  !important'}} 
                        className='rounded-3 '
                        onClick={handleSubmit}
                        // onclick shoudl add the list into appointmetn collection 
                        >
                        <HowToRegIcon className='me-1'/>
                        Confirm</Button>
                    </div>
                </form>
            </Box>
            
            </Fade>
        </Modal>
    </div>
  )
}

export default DoctorAppForm