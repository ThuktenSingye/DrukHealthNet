import React from 'react'
import './AppointmentMade.css'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconButton } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { useState } from 'react';
import { Button } from '@mui/material';

function AppointmentMade() {
  const [showAll, setShowAll] = useState(false)
  const handleToggleShowAll = ()=>{
    setShowAll(!showAll)
  }
    const appList = [
        {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: true, from: false, reason:'Surgery', time: '12:45pm', date: '23 April, 2023', address: 'Hospitcal'},
        {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: true, from: false, reason:'Surgery', time: '12:45pm', date: '23 April, 2023', address: 'Hospitcal'},
        {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: true, from: false, reason:'Surgery', time: '12:45pm', date: '23 April, 2023', address: 'Hospitcal'},
        {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: true, from: false, reason:'Surgery', time: '12:45pm', date: '23 April, 2023', address: 'Hospitcal'},
        {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: true, from: false, reason:'Surgery', time: '12:45pm', date: '23 April, 2023', address: 'Hospitcal'},
    ]
  return (
    <div className='appointmentList'>
        <h1>Appointment</h1>
        <List className='d-flex flex-column justify-content-between align-item-center gap-3 ' >
          {
            appList.slice(0, showAll?0:3).map((appointment, index)=>(
              <ListItem className='d-flex appList justify-content-evenly align-items-center gap-3 rounded-5' key={index}>
                <ListItemAvatar className='me-2'>
                  <Avatar
                    alt="Remy Sharp"
                    src={appointment.imgSrc}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={appointment.dName}
                  secondary="sdcdos"
                />
                <ListItemText
                  primary={appointment.date}
                  secondary={appointment.time}
                />
                <a href="/">View Detial</a>
                <ListItemIcon>
                  <IconButton>
                    <DeleteIcon/>
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            ))
          }
          </List>
          <Collapse in={showAll} style={{margin:'0', padding:'0', outlineWidth: '0'}} easing='ease-in-out' timeout={500}>
            <List className='d-flex flex-column justify-content-between align-item-center gap-3'>
            {
            appList.map((appointment, index)=>(
              <ListItem className='d-flex appList justify-content-evenly align-items-center gap-3 rounded-5' key={index}>
                <ListItemAvatar className='me-2'>
                  <Avatar
                    alt="Remy Sharp"
                    src={appointment.imgSrc}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={appointment.dName}
                  secondary="sdcdos"
                />
                <ListItemText
                  primary={appointment.date}
                  secondary={appointment.time}
                />
                <a href="/">View Detial</a>
                <ListItemIcon>
                  <IconButton>
                    <DeleteIcon/>
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            ))
            }
            </List>
          </Collapse>
          <div className='d-flex justify-content-center align-content-center '>
          <Button onClick={handleToggleShowAll} className='rounded-3 showbtn mb-2 mt-3' >
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

export default AppointmentMade