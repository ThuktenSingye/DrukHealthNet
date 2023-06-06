import React from 'react'
import './Sidebar.css'

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ApprovalIcon from '@mui/icons-material/Approval';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NavLink, Link } from 'react-router-dom';
function Sidebar({showSidebar, setShowSidebar, toggleSidebar, type}) {
   
  return (
    <div className={`sidebar ${showSidebar? 'show':'no'}`}>
      <List>
      <ListItem button className='rounded-0 d-flex justify-content-start'>
        <ListItemAvatar className='me-3'>
          <Avatar>
            <ApprovalIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink to={type==='patient' ? '/dashboard/appointment':'/dashboard/doctorApp'} style={{margin: '0', padding:'0',textDecoration:'none', color:'black'}}><ListItemText primary='Appointment'/></NavLink>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button className='rounded-0 d-flex justify-content-start'>
        <ListItemAvatar className='me-3'>
          <Avatar>
            <AssignmentIndIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink to='/record' style={{margin: '0', padding:'0',textDecoration:'none', color:'black'}}><ListItemText primary='Medical Record'/></NavLink>
  
      </ListItem >
      <Divider variant="inset" component="li" />
      <ListItem button className='rounded-0 d-flex justify-content-start'>
        <ListItemAvatar className='me-3'>
          <Avatar>
            <AssignmentIndIcon />
          </Avatar>
        </ListItemAvatar>
        <NavLink to='/doctor' style={{margin: '0', padding:'0', textDecoration:'none', color:'black'}}><ListItemText primary='Doctor'/></NavLink>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
      
    
    </div>
  )
}

export default Sidebar