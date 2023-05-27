import React from 'react'
import './AppRequest.css'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
function AppRequest({type}) {
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
                    <CancelOutlinedIcon/>
                  </IconButton>
                  {
                  type ==='request'? <IconButton>
                  <EditCalendarOutlinedIcon/>
                </IconButton>:  <IconButton>
                    <CheckIcon/>  
                  </IconButton>
                  }
                </ListItemIcon>
              </ListItem>
            ))
          }
          </List>
          {type === 'request' && 
            <Button className='rounded-1 mt-2'>Schedule Appoinment</Button>
          }
    </div>
  )
}

export default AppRequest