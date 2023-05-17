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
function Sidebar({showSidebar, setShowSidebar, toggleSidebar}) {
   
  return (
    <div className={`sidebar ${showSidebar? 'show':'no'}`}>
      <List>
      <ListItem button className='rounded-0'>
        <ListItemAvatar className='me-3'>
          <Avatar>
            <ApprovalIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Appointment" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button className='rounded-0'>
        <ListItemAvatar className='me-3'>
          <Avatar>
            <AssignmentIndIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Medical Record"  />
      </ListItem >
      <Divider variant="inset" component="li" />
      <ListItem button className='rounded-0'>
        <ListItemAvatar className='me-3'>
          <Avatar>
            <AssignmentIndIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Doctor"  />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
      
    
    </div>
  )
}

export default Sidebar