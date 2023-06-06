import React from 'react'
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
import {Timestamp, doc, onSnapshot, collection} from 'firebase/firestore'
import useFirestore from '../../hooks/useFirestore';
import { useState } from 'react';
import useViewContext from '../../hooks/useViewContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { projectFirestore } from '../../firebase/config';
// import useFirestore from '../../hooks/useFirestore';
import useFetch from '../../hooks/useFetch';
function Detail({type}) {
   
    const {id} = useParams()
    const {showDetail,toggleShowDetail, setShowDetail} = useViewContext()

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
      const [appRequest, setAppRequest] = useState([])

    //   fetch doct baced on id 
    // const {isPending, error, data} = useFetch(type ==='patient'?{collect:'patientAppointment'}:{collect:'doctorAppointment'})
  
    useEffect(()=>{
        if (id){
      const unsub = onSnapshot(doc(collection(projectFirestore,type==='patient'?'patientAppointment':'doctorAppointment'), id),(snapshot)=>{
        if(snapshot.exists){
            setAppRequest(snapshot.data())
        }
        return ()=>unsub
      })
    }else{
        console.log("No id")
    }
    },[id, type])
    // console.log('id', id)
  return (
    <div className='detail'>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={showDetail}
            onClose={setShowDetail}
            closeAfterTransition
            slots={{ backdrop: Backdrop}}
            slotProps={{
            backdrop: {
                sx: { opacity: '0.5 !important', backgroundColor:'rgba(0, 0, 0, 0.01) !important', zIndex: 1},
                timeout: 500,
            },
            }}
            >
            <Fade in={showDetail} >
            {appRequest &&
            <Box sx={style} className='app-wrapper d-flex flex-column gap-2 '>
                <div className='d-flex align-items-center gap-3'>
                <Typography  className='lead fw-semibold'>
                    Reason:
                </Typography>
                <Typography  className='lead  '>
                    {appRequest.reason}
                </Typography>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <Typography   className='lead fw-semibold' >
                        Note -
                    </Typography>
                    <Typography    className='lead '>
                        {appRequest.note}
                    </Typography>
                </div>
                <div className='d-flex align-items-center  gap-3'>
                <Typography   className='lead fw-semibold' >
                        Date -
                    </Typography>
                    <Typography    className='lead'>
                        {appRequest.date}
                    </Typography>
                </div>
              
                <div className='d-flex align-items-center  gap-3'>
                    <Typography   className='lead fw-semibold' >
                        Location -
                    </Typography>
                    <Typography   className='lead '>
                        {appRequest.location}
                    </Typography>
                </div>
                <div>
                    <IconButton onClick={toggleShowDetail} sx={{textTransform:'capitalize !important',color:'#6859F3  !important', position:'absolute',top:'0',right:'0'}} className='rounded-1 lead'>
                    <CancelIcon />
                    </IconButton>

                </div>            
            </Box>
            }
            </Fade>
        </Modal>

    </div>
  )
}

export default Detail