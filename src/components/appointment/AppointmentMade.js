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
import { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { useAsyncError } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {collection, onSnapshot,doc} from 'firebase/firestore'
import { projectFirestore } from '../../firebase/config';
import useFirestore from '../../hooks/useFirestore';
import useViewContext from '../../hooks/useViewContext';
import Detail from './Detail';
import { NavLink } from 'react-router-dom';
function AppointmentMade({type}) {
  const [showAll, setShowAll] = useState(false)
  const [appList, setAppList] = useState([])
  const [userInfo,setUserInfo] = useState([])
  const [multiplePatientReq, setMultiplePatientReq] = useState([])
  const [multipleDoctorReq, setMultipleDoctorReq] = useState([])
  const[doctList, setDoctList] = useState([])
  const[patientList, setPatientList] = useState([])
  const [allAppList, setAllAppList]= useState([])
  const {user} = useAuthContext()
  const { showDetail,toggleShowDetail, setShowDetail} = useViewContext()
  const [collect, setCollect]= useState('')
 
  
  // console.log('userdsfsd', user.uid)
  const handleToggleShowAll = ()=>{
    setShowAll(!showAll)
  }
  
  const {isPending:pPending, error:pError, data:patientData} = useFetch({collect:'patientAppointment'})
  const {isPending:dPending, error:dError, data:doctorData} = useFetch({collect:'doctorAppointment'})
  
  // const {deleteDocument, updateDocument, response} = useFirestore('patientAppointment')
    
  useEffect(()=>{
    if (patientData && patientData.length > 0) { // Check if data is not null and has at least one element
      const filteredPatient = patientData.filter((appointment) => appointment.status === 'approved' && (type==='patient'?appointment.patient_Id===user?.uid:appointment.doctor_Id===user?.uid));
      setPatientList(filteredPatient)
    }
    if (doctorData && doctorData.length > 0) { // Check if data is not null and has at least one element
  
      const filteredDoctor = doctorData.filter((appointment) => appointment.status === 'approved' && (type==='patient'?appointment.patient_Id===user?.uid:appointment.doctor_Id===user?.uid));
      setDoctList(filteredDoctor)
    }
  },[doctorData,patientData, user?.uid, type])
  
  useEffect(() => {
    if (patientList && patientList.length > 0) {
      console.log("Patet", patientList)
      const docs= []
      const unsubscribers = patientList.map((req) => {
        return onSnapshot(doc(collection(projectFirestore, type==='patient'?'doctors':'users'),  type==='patient'?req.doctor_Id:req.patient_Id), (snapshot) => {
          if (snapshot.exists) {
            const reinfo = {
              docId:req.id,
              id: type === 'patient'?req.doctor_Id:req.patient_Id,
              date: req.date,
              data: snapshot.data(),
              apppoint: patientList,
              db: 'patientAppointment'
            };
            docs.push(reinfo)
            setMultiplePatientReq(docs);
          }
        });
      });
  
      return () => {
        unsubscribers.forEach((unsub) => unsub());
      };
    }
  }, [patientList, type]);
  useEffect(() => {
    if (doctList && doctList.length > 0) {
      // console.log("Patet", patientList)
      const docs= []
      const unsubscribers = doctList.map((req) => {
        return onSnapshot(doc(collection(projectFirestore, type==='patient'?'doctors':'users'),  type==='patient'?req.doctor_Id:req.patient_Id), (snapshot) => {
          if (snapshot.exists) {
            const reinfo = {
              docId:req.id,
              id: type === 'patient'?req.patient_Id:req.doctor_Id,
              date: req.date,
              data: snapshot.data(),
              appoint:doctList,
              db: 'doctorAppointment'
            };
            docs.push(reinfo)
            setMultipleDoctorReq(docs);
          }
        });
      });
  
      return () => {
        unsubscribers.forEach((unsub) => unsub());
      };
    }
  }, [doctList, type]);
  useEffect(()=>{
    const approvedApp=[...multipleDoctorReq, ...multiplePatientReq]
    // const approvedApp = {
    //   multipleDoctorReq,
    //   multiplePatientReq
    // })

    setAllAppList(approvedApp)

  },[multipleDoctorReq, multiplePatientReq])
  
  
  console.log('s',allAppList)
  const handleView = ()=>{
    toggleShowDetail()
  }
  
  
  const handleDelete=async (id, db)=>{

    console.log(id, db)
    // setCollect(db)
    // if (collect){
    //   console.log(id)
    // }
    // this will delte
    // await deleteDocument(id) 
  }
  // console.log("Approved List", userInfo)
  return (
    <div className='appointmentList'>
        <h1>Appointment Made</h1>
        <List className='d-flex flex-column justify-content-between align-item-center gap-3 ' >
          {allAppList && 
            allAppList.slice(0, showAll? 0:3).map((appointment, index)=>(
              <ListItem className='d-flex appList justify-content-evenly align-items-center gap-3 rounded-5' key={index}>
                <ListItemAvatar className='me-2'>
                  <Avatar
                    alt="Remy Sharp"
                    // src={appointment.imgSrc}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={appointment.data && type==='patient'? appointment.data.name:appointment.data.userName}
                  secondary={appointment.data && type==='patient'?appointment.data.specialization:appointment.data.type}
                />
                <ListItemText
                  primary={appointment.data && type==='patient'?appointment.date:appointment.date}
                  // secondary={}
                />
                  <NavLink to={type==='doctor'?`/dashboard/doctorApp/${appointment.docId}`:`/dashboard/appointment/${appointment.docId}`} >
                  <Button onClick={handleView}>View Detail</Button>
                </NavLink>
                {showDetail && <Detail type={type}/>}
                <ListItemIcon>
                <IconButton onClick={(e)=>handleDelete(appointment.docId, appointment.db)}>
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
            allAppList.slice(0,allAppList.length).map((appointment, index)=>(
              <ListItem className='d-flex appList justify-content-evenly align-items-center gap-3 rounded-5' key={index}>
                <ListItemAvatar className='me-2'>
                  <Avatar
                    alt="Remy Sharp"
                    // src={appointment.imgSrc}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                   primary={appointment.data && type==='patient'? appointment.data.userName:appointment.data.name}
                   secondary={appointment.data && type==='patient'?appointment.data.specialization:appointment.data.type}
                />
                <ListItemText
                  primary={appointment.data && type==='patient'?appointment.date:appointment.data.date}
                />
                <ListItemText
                 primary={appointment.data && type==='patient'?appointment.date:appointment.data.date}
                  // primary={appointment.date}
                  // secondary={appointment.time}
                />
                <a href="/">View Detial</a>
                <ListItemIcon>
                  <IconButton onClick={(e)=>handleDelete(appointment.docId, appointment.db)}>
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