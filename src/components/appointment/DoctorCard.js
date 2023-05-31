import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import './Doctor.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import useAppointmentContext from '../../hooks/useAppointmentContext';
import Avatar from '@mui/material/Avatar';
import { useEffect } from 'react';
import { projectStorage } from '../../firebase/config';
// import Typography from '@mui/material/Typography';
import AppForm from './AppForm';
import {ref, getDownloadURL} from 'firebase/storage'
import useAuthContext from '../../hooks/useAuthContext';
import {collection, doc, onSnapshot} from 'firebase/firestore'
import { projectFirestore } from '../../firebase/config';
function DoctorCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [userInfo, setUserInfo] = useState(null)
    const {showAppointmentForm,toggleAppointmentForm, appointment} = useAppointmentContext()
    const {user} = useAuthContext()
    
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    const {doctorName, specialist, type, id, description} = props
    const handleScheduleAppointment = () =>{
        toggleAppointmentForm()
    }
    const [imageUrl, setImageUrl] = useState('')
    useEffect(()=>{
        getDownloadURL(ref(projectStorage,`docAvatar/${id}/3.jpeg`))
        .then((url)=>{
            setImageUrl(url)
        }).catch(err=>{
            console.log(err.message)
        })

        const unsub = onSnapshot(doc(collection(projectFirestore, 'users'), user.uid), (snapshot)=>{
            if(!snapshot.empty){
                setUserInfo(snapshot.data())
            }
        })
        return ()=> unsub


     },[id, user.uid])
  return (
    //  onMouseEnter={handleFlip} onMouseOut={handleFlip}
     <div >   
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
            <Card   className='d-flex flex-column justify-content-center align-items-center position-relative'>
                {type === 'patient' &&
                    <div className='position-absolute d-flex flex-column justify-content-evenly align-items-center' style={{top:'0', right:'0'}}>
                        <IconButton>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <IconButton>
                            <TaskAltOutlinedIcon/>
                        </IconButton>
                    </div>
                }
                <Avatar
                alt="Remy Sharp"
                src={imageUrl}
                sx={{ width: 150, height: 150 }}
                className='mt-2'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        {doctorName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='text-center'>
                        {specialist}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" 
                    className='rounded-2 p-1 mb-1' 
                    sx={{backgroundColor: '#3A4265', '&:hover': { backgroundColor: '#6859F3' }, color:'white', textTransform:'capitalize !important', fontSize: '1rem !important'}}
                    onClick={handleScheduleAppointment}
                    >
                        Schedule Appointment
                    </Button>
                    {showAppointmentForm  && <AppForm id={id} patientId={user.uid} type={userInfo.type}/>
                    }
                </CardActions>
            </Card>
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {doctorName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='text-center'>
                        {specialist}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     {description.expYear}
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

export default DoctorCard