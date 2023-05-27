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
import AppsIcon from '@mui/icons-material/Apps';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './Request.css'
function Request({type}) {
  const [grid, setGrid] = useState(true)
  
  const handleDisplay = (e)=>{
    e.preventDefault()
    setGrid(!grid)
  }
  //  fetch data from the for now let declare the static data
  const doctorList = [
    {imgSrc: 'https://avatars.githubusercontent.com/u/123463210?v=4', doctorName: 'Dr. Tashi', specialist: 'Dentist'},
    {imgSrc: 'https://avatars.githubusercontent.com/u/123463210?v=4', doctorName: 'Dr. Yeshi', specialist: 'Cardiologist'},
    {imgSrc: 'https://avatars.githubusercontent.com/u/123463210?v=4', doctorName: 'Dr. Tshering', specialist: 'Gynecologist'},
    {imgSrc: 'https://avatars.githubusercontent.com/u/123463210?v=4', doctorName: 'Dr. Lama', specialist: 'Pediatrician'},
    {imgSrc: 'https://avatars.githubusercontent.com/u/123463210?v=4', doctorName: 'Dr. Dorji', specialist: 'Surgeon'},
    {imgSrc: 'https://avatars.githubusercontent.com/u/123463210?v=4', doctorName: 'Dr. Singye', specialist: 'Dentist'}
  ]
  return (
    <div className='request '>
        {/* <div className='d-flex justify-content-between align-items-center me-5 ms-5'>
          <div>
            <DensityMediumIcon/>
            <AppsIcon />
          </div>
        </div> */}
        {grid && 
          <Grid container spacing={{ xs: 2, md: 10 }} className='p-5 mt-2' columns={{ xs: 1, sm: 8, md: 12 }}> 
          {
            doctorList.map((doctor, index)=>(
              <Grid item xs={12} sm={6} md={3} lg={4} key={index} >
                <DoctorCard imgSrc={doctor.imgSrc} doctorName={doctor.doctorName} specialist={doctor.specialist} type={type}/>
              </Grid>
            ))
          }
          </Grid>
        }
    </div>
  )
}

export default Request


