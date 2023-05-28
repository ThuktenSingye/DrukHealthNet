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

import Avatar from '@mui/material/Avatar';
function DoctorCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [open, setOpen] = useState(false)
    const handleOpen = (e) =>{
        e.preventDefault()
        setOpen(!open)
        
    }
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    const {imgSrc, doctorName, specialist, type, openAppoinment, toggleAppointmentForm} = props
 
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
                src={imgSrc}
                sx={{ width: 100, height: 100 }}
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
                    sx={{backgroundColor: '#3A4265', '&:hover': { backgroundColor: '#6859F3' }, color:'white'}}
                    onClick={toggleAppointmentForm}
                    >
                        Schedule sAppointment
                    </Button>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
                       nunc a ullamcorper congue, urna elit malesuada odio, a venenatis est mi et odio.
                        Ut aliquet enim augue, a aliquet neque vulputate ac. Morbi sodales malesuada elit
                        eu bibendum. Fusce eget lorem massa.
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