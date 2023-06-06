import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import './Doctor.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button,  CardActions, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import useAppointmentContext from '../../hooks/useAppointmentContext';
import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
import useAuthContext from '../../hooks/useAuthContext';
import {collection, doc, onSnapshot} from 'firebase/firestore'
import { projectFirestore } from '../../firebase/config';
import useAvatar from '../../hooks/useAvatar';

import useFirestore from '../../hooks/useFirestore';
function PatientCard({patient}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [userInfo, setUserInfo] = useState(null)
    const {showAppointmentForm,toggleAppointmentForm, appointment} = useAppointmentContext()
    const {deleteDocument, updateDocument, response} = useFirestore('patientAppointment')
    const {user} = useAuthContext()
    const {did} = useParams()
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    // const {}
    const {patient_Id, doctor_Id, date, location, reason, note, id} = patient
    const {imgUrl} = useAvatar({id:patient_Id, type:'patient'})

    const handleScheduleAppointment = () =>{
        toggleAppointmentForm()
    }
    // const [imageUrl, setImageUrl] = useState('')
    useEffect(()=>{ 
        const unsub = onSnapshot(doc(collection(projectFirestore, 'users'), patient_Id), (snapshot)=>{
            if(!snapshot.empty){
                setUserInfo(snapshot.data())
            }
        })
        return ()=> unsub
    
     },[patient_Id])

    //  useEffect(()=>{
    //     const unsub = onSnapshot(doc(collection(projectFirestore,),patient_Id))
    //  })
     const handleDelete= async (e)=>{
        e.preventDefault()
        // code to delte an doucment
        await deleteDocument(id)
     }
     const handleAccept =async (e) =>{
        e.preventDefault()
        // update the status to approved
        const updates= {
            status:'approved'
        }
        await updateDocument(id,updates)
        if(!response.error){
            console.log("Succesfully updated")
        }
     }
  return (
    // onMouseEnter={handleFlip} onMouseOut={handleFlip}
     <div >   
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
            <Card   className='d-flex flex-column justify-content-center align-items-center position-relative'  >
                {/* {type === 'patient' && */}
                <div className='position-absolute d-flex flex-column justify-content-evenly align-items-center' style={{top:'0', right:'0'}}>
                    <IconButton onClick={handleDelete}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <IconButton onClick={handleAccept}>
                        <TaskAltOutlinedIcon/>
                    </IconButton>
                </div>
                   
                {/* } */}
                <Avatar
                alt="Remy Sharp"
                // src={imgUrl}
                sx={{ width: 80, height: 80 }}
                className='mt-2'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" className='text-center' >
                        {userInfo?.userName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='text-center'>
                        {userInfo?.Type}
                    </Typography> <br/>
                    <Typography variant="body2" color="text.secondary" className='text-center'>
                        {`${date}-${location}`}
                    </Typography>

                </CardContent>
                {/* <CardActions>
                    <NavLink  to={`/appointment/${id}`}>
                        <Button size="small" 
                        className='rounded-2 p-1 mb-1' 
                        sx={{backgroundColor: '#3A4265', '&:hover': { backgroundColor: '#6859F3' }, color:'white', textTransform:'capitalize !important', fontSize: '1rem !important'}}
                        onClick={handleScheduleAppointment}
                        >
                            Schedule Appointment
                        </Button>
                        
                    </NavLink>
                    {showAppointmentForm  && <AppForm id={did} patientId={user.uid} type={userInfo.type}/> }
                </CardActions> */}
            </Card>
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {note}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='text-center'>
                        {reason}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     
                     {`${date}-${location}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className='rounded-2 p-1 mb-1' sx={{backgroundColor: '#3A4265', '&:hover': { backgroundColor: '#6859F3' }, color:'white'}}>
                        Book Appointment
                    </Button>
                </CardActions>
            </Card>

        </ReactCardFlip>
    </div>
  )
}

export default PatientCard