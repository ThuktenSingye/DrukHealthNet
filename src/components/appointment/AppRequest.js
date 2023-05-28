import React from 'react'
import './AppRequest.css'
import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import Collapse from '@mui/material/Collapse';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
function AppRequest({type}) {
  const [showAll, setShowAll] = useState(false)

  const handleToggleShowAll = () =>{
    setShowAll(!showAll)
  }

  const appRequest = [
    {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: true, from: false, reason:'Surgery'},
    {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: false, from: true, reason:'Surgery'},
    {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: true, from: false, reason:'Surgery'},
    {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: true, from: false, reason:'Surgery'},
    {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: false, from: true, reason:'Surgery'},
    {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: false, from: true, reason:'Surgery'},
    {imgSrc:'https://avatars.githubusercontent.com/u/123463210?v=4', dName:'Singye', to: false, from: true, reason:'Surgery'}
  ]
  return (
    <div className='appRequest mb-5'>
        <h1>Appointment Request</h1>
        <List className='d-flex flex-column justify-content-between align-item-center gap-3'>
          {
            appRequest.slice(0, showAll? 0:3).map((request, index)=>(
              <ListItem className='d-flex justify-content-evenly appList align-items-center gap-3 rounded-5' key={index}>
                <ListItemAvatar className='me-2'>
                  <Avatar
                    alt="Remy Sharp"
                    src={request.imgSrc}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={request.dName}
                  secondary="sdcdos"
                />
                <ListItemText
                  primary="24 april, 2023"
                />
                <a href="/">View Detial</a>

                <ListItemIcon className='d-flex gap-2'>
                  <IconButton>
                    <CancelIcon/>
                  </IconButton>
                  {
                  type ==='request'? <IconButton>
                  <EditCalendarOutlinedIcon/>
                </IconButton>:  <IconButton>
                    <CheckCircleIcon/>  
                  </IconButton>
                  }
                </ListItemIcon>
              </ListItem>
            ))
          }
          </List>
          <Collapse in={showAll} style={{margin:'0', padding:'0', outlineWidth: '0'}} easing='ease-in-out' timeout={500}>
          <List className='d-flex flex-column justify-content-between align-item-center gap-3'>
          {
            appRequest.map((request, index)=>(
              <ListItem className='d-flex justify-content-evenly appList align-items-center gap-3 rounded-5' key={index}>
                <ListItemAvatar className='me-2'>
                  <Avatar
                    alt="Remy Sharp"
                    src={request.imgSrc}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={request.dName}
                  secondary="sdcdos"
                />
                <ListItemText
                  primary="24 april, 2023"
                />
                <a href="/">View Detial</a>

                <ListItemIcon className='d-flex gap-2'>
                  <IconButton>
                    <CancelIcon/>
                  </IconButton>
                  {
                  type ==='request'? <IconButton>
                  <EditCalendarOutlinedIcon/>
                </IconButton>:  <IconButton>
                    <CheckCircleIcon/>  
                  </IconButton>
                  }
                </ListItemIcon>
              </ListItem>
            ))
          }
          </List>
            
          </Collapse>
          <div className='d-flex justify-content-center align-content-center gap-5 '>
          <Button onClick={handleToggleShowAll} className='rounded-3 showbtn mb-2 mt-3' >
            {showAll ? (
              <>
                <ExpandLessSharpIcon />
                <span>Show Less </span>
              </>
            ) : (
              <>
                <ExpandMoreSharpIcon />
                <span>Show More</span>
              </>
            )}
          </Button>
            {type === 'request' && 
              <Button className='rounded-3 mt-2 mb-2 showbtn ' >
                <>
                <EditCalendarIcon/>
                <span>Schedule Appointment</span>
                </>
              </Button>
            }
        </div>

         
    </div>
  )
}

export default AppRequest