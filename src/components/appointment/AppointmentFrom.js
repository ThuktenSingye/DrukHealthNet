import React from 'react'
import './AppRequest.css'
import { useState } from 'react';

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
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import useAppointmentContext from '../../hooks/useAppointmentContext';
// import useFetch from '../../hooks/useFetch';
import {collection, onSnapshot,doc} from 'firebase/firestore'
import { projectFirestore } from '../../firebase/config';
import useFirestore from '../../hooks/useFirestore';
import DoctorAppForm from './DoctorAppForm';
import Detail from './Detail';
import useViewContext from '../../hooks/useViewContext';
import { NavLink } from 'react-router-dom';

function AppointmentFrom({type}) {
    const [showAll, setShowAll] = useState(false)
  const [appRequest, setAppRequest] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [multipleReq, setMultipleReq] = useState([])
  const { showDetail,toggleShowDetail, setShowDetail} = useViewContext()
  const {deleteDocument,  updateDocument, response} = useFirestore('doctorAppointment')
//   const {deleteDocument, updateDocument, response} = useFirestore('patientAppointment')

  const {showAppointmentForm,toggleAppointmentForm, appointment} = useAppointmentContext()
  const {isPending, error, data} = useFetch({collect:'doctorAppointment'})
  const handleScheduleAppointment = () =>{
    toggleAppointmentForm()
  }
  useEffect(()=>{
    if (data && data.length > 0) { // Check if data is not null and has at least one element
      const filteredAppointments = data.filter((appointment) => appointment.status === 'request');
      setAppRequest(filteredAppointments);
    }
  },[data])
  useEffect(() => {
    if (appRequest && appRequest.length > 0) {
      const docs= []
      const unsubscribers = appRequest.map((req) => {
        return onSnapshot(doc(collection(projectFirestore, 'doctors'),  req.doctor_Id), (snapshot) => {
          if (snapshot.exists) {
            
            const reinfo = {
              
              docId:req.id,
              id: req.doctor_Id,
              date: req.date,
              data: snapshot.data()
            };
            docs.push(reinfo)
            setMultipleReq(docs);
          }
        });
      });
  
      return () => {
        unsubscribers.forEach((unsub) => unsub());
      };
    }
  }, [appRequest]);
  // const { imgUrls } = useAvatar({ ids: appRequest.map((request) => request.doctor_Id) });
  const handleToggleShowAll = () =>{
    setShowAll(!showAll)
  }
  const handleUpdate= async (id)=>{
    // e.preventDefault() 
    // e.preventDefault()
        // update the status to approved
        const updates= {
            status:'approved'
        }
        await updateDocument(id,updates)
        if(!response.error){
            console.log("Succesfully updated")
        }
    // update the status
    // console.log(id)

  } 
  const handleCancel = async (id)=>{
    // e.preventDefault()
    // await deleteDocument(id)
    console.log('App reques', appRequest)
    console.log("multiple", multipleReq)
    // console.log("App request", appRequest)
    // // console.log("app request.", appRequest[0].id)
    console.log(id)
  }
  
  const handleView = ()=>{
    toggleShowDetail()
  }
  
  return (
    <div>
         <h1>Incoming Request</h1>
        <List className='d-flex flex-column justify-content-between align-item-center gap-3'>
          {
            multipleReq.slice(0, showAll? 0:2).map((request, index)=>(
              <ListItem className='d-flex justify-content-evenly appList align-items-center gap-3 rounded-5' key={index}>
                <ListItemAvatar className='me-2'>
                  <Avatar
                    alt="Remy Sharp"
                    // src={imgUrls[index]}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  // primary={userInfo && userInfo[index].userName}
                 primary={request.data && (type==='doctor'?request.data.userName: request.data.name)}
                 secondary={request.data && (type==='doctor'? request.data.type: request.data.specialization)}
                />
                <ListItemText
                  primary={request.data && type==='doctor'? request.data.date: request.date}
                  // to={`/appointment/${id}`
                />
                <NavLink to={`/dashboard/appointment/${request.docId}`} >
                  <Button onClick={handleView}>View Detail</Button>
                </NavLink>
                {showDetail && <Detail type={type}/>}

                <ListItemIcon className='d-flex gap-2'>
                  <IconButton onClick={(e)=>handleCancel(request.docId)}>
                    <CancelIcon/>
                  </IconButton>
                  {
                  <IconButton onClick={(e)=>handleUpdate(request.docId)}>
                    <EditCalendarOutlinedIcon/>
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
            multipleReq.slice(0,multipleReq.length).map((request, index)=>(
              <ListItem className='d-flex justify-content-evenly appList align-items-center gap-3 rounded-5' key={index}>
                <ListItemAvatar className='me-2'>
                  <Avatar
                    alt="Remy Sharp"
                    // src={request.imgSrc}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  // primary={userInfo && userInfo[index].userName}
                 primary={request.data && (type==='doctor'?request.data.userName: request.data.name)}
                 secondary={request.data && (type==='doctor'? request.data.type: request.data.specialization)}
                />
                <ListItemText
                  primary={request.data && type==='doctor'? request.data.date: request.date}
                  // to={`/appointment/${id}`
                />
                <NavLink to={`/dashboard/appointment/${request.docId}`} >
                  <Button onClick={handleView}>View Detail</Button>
                </NavLink>
                {showDetail && <Detail type='patient'/>}

                <ListItemIcon className='d-flex gap-2'>
                  <IconButton onClick={(e)=>handleCancel(request.docId)}>
                    <CancelIcon/>
                  </IconButton>
                  {
                  <IconButton onClick={(e)=>handleUpdate(request.docId)}>
                    <EditCalendarOutlinedIcon/>
                </IconButton>
                  }
                </ListItemIcon>
                {/* <ListItemText
                  primary={request.data && request.data.userName}
                  secondary="sdcdos"
                />
                <ListItemText
                  primary="24 april, 2023"
                />
                <a href="/">View Detial</a> */}
                {/* <ListItemIcon className='d-flex gap-2'>
                  <IconButton>
                    <CancelIcon/>
                  </IconButton>
                  {
                  type ==='doctor'? <IconButton>
                  <EditCalendarOutlinedIcon/>
                </IconButton>:  <IconButton>
                    <CheckCircleIcon/>  
                  </IconButton>
                  }
                </ListItemIcon> */}
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

            {/* {type === 'doctor' && 
              <Button className='rounded-3 mt-2 mb-2 showbtn  ' onClick={handleScheduleAppointment}>
                <>
                <EditCalendarIcon/>
                <span>Schedule Appointment</span>
                </>
              </Button>
            }
            {showAppointmentForm  && <DoctorAppForm/> } */}
        </div>

    </div>
  )
}

export default AppointmentFrom