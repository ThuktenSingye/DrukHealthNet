import React from 'react'
import './Doctor.css'
import { useState } from 'react';
import './Doctor.css'
import { Button } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';
import DoctorCard from './DoctorCard';
import AppsIcon from '@mui/icons-material/Apps';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Collapse from '@mui/material/Collapse';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import useFetch from '../../hooks/useFetch';
// import { useEffect } from "react";
// import { projectFirestore } from '../../firebase/config';
// import {collection, onSnapshot} from 'firebase/firestore'
function Doctor({type}) {
  const [showAll, setShowAll] = useState(false)
  const [grid, setGrid] = useState(true)

  const handleToggleShowAll = () =>{
    setShowAll(!showAll)
  }
  const handleDisplay = (e)=>{
    e.preventDefault()
    setGrid(!grid)
  }

  const {isPending, error, data} = useFetch({collect:'doctors'})
  // console.log("Doctor,", data)

  return (
    <div className='doctor m-5'>
        <div className='d-flex justify-content-between align-items-center me-5 ms-5'>
          <h1>Doctor</h1>
          <div>
            {/* sorting */}
            <DensityMediumIcon/>
            <AppsIcon />
          </div>
        </div>
        {grid && (
          <>
          <Grid container spacing={{ xs: 2, md: 10 }} className='p-5' columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            data.slice(0,6).map((doctor, index)=>(
              <Grid item xs={12} sm={6} md={3} lg={4} key={index} >
                <DoctorCard 
                // imgSrc={doctor.imgSrc}
                did={doctor.id}
                doctorName={doctor.name} 
                specialist={doctor.specialization} 
                description={doctor.description}

                />
              </Grid>
            ))
          }
          </Grid>
          <Collapse in={showAll} style={{margin:'0', padding:'0', outlineWidth: '0'}} easing='ease-in-out' timeout={500}>
            <Grid container spacing={{ xs: 2, md: 10 }} className='p-5' columns={{ xs: 4, sm: 8, md: 12 }} >
            {
              data.slice(6, data.length).map((doctor, index)=>(
                <Grid item xs={12} sm={6} md={3} lg={4} key={index} >
                  <DoctorCard 
                  // imgSrc={doctor.imgSrc} 
                  doctorName={doctor.name} 
                  specialist={doctor.specialization}
                
                  />
                </Grid>
              ))
            }
            </Grid>
          </Collapse>
          </>
        ) 
        }
        <div className='d-flex justify-content-center align-content-center '>
          <Button onClick={handleToggleShowAll} className='rounded-3 showbtn mb-5' >
          {showAll ? (
            <>
              <ExpandLessSharpIcon />
              <span> Show Less</span>
            </>
          ) : (
            <>
              <ExpandMoreSharpIcon />
              <span>Show More</span>
            </>
          )}
          </Button>
        </div>
    </div>
  )
}

export default Doctor

