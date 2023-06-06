import React from 'react'
import './Doctor.css'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import './Doctor.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DoctorCard from './DoctorCard';
import useAuthContext from '../../hooks/useAuthContext';
import './Request.css'
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import PatientCard from './PatientCard';

function Request({type}) {
  const [grid, setGrid] = useState(true)
  const {user} = useAuthContext()
  const [appRequest, setAppRequest] = useState([])
  // console.log("Currently login user", user)
  const handleDisplay = (e)=>{
    e.preventDefault()
    setGrid(!grid)
  }
  //  look for patient appointment and see if the the login uid == appointet uid. if so display it on the
  const {isPending, error, data} = useFetch({collect:'patientAppointment'})
  
  useEffect(()=>{

    if (data && data.length > 0) { // Check if data is not null and has at least one element
      const filteredAppointments = data.filter((appointment) => appointment.doctor_Id=== user?.uid); // check if the doctor id in appointmentis same as that of user uid
      const statusFiltered = filteredAppointments.filter((appointment)=>appointment.status==='request') // if so check the filtered element for type reques
      setAppRequest(statusFiltered);
    }
  },[data])
  useEffect(()=>{
    // import doc of user id
  },[])
  // console.log("ds", appRequest)


  return (
    <div className='request '>
       
        {grid && 
          <Grid container spacing={{ xs: 2, md: 10 }} className='p-5 mt-2' columns={{ xs: 1, sm: 8, md: 12 }}> 
          { appRequest && 
            appRequest.map((patient, index)=>(
              <Grid item xs={12} sm={6} md={3} lg={4} key={index} >
                {/* <DoctorCard imgSrc={doctor.name} doctorName={doctor.type} specialist={doctor.specialist} type={type}/> */}
                <PatientCard patient={patient}/>
              </Grid>
            ))
          }
          </Grid>
        }
    </div>
  )
}

export default Request


