import React from 'react'
import "./Header.css"
// importing icon
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MessageIcon from '@material-ui/icons/Message';
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search';
import { Icon, IconButton } from '@material-ui/core';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
function Header() {
  return (
   <div className='header container-fluid d-flex justify-content-between align-items-center p-1 bg-white position-sticky top-0 start-0 navbar-light shadow-sm '>
    <div className="header_left d-flex align-items-center ms-5">
        <img src="" alt="" />
        <h1>Druk Health Net</h1>
    </div>
    <div className="header_right d-flex align-items-center ">
        <div className="header_right_search">
            <label className='d-flex align-items-center p-1 rounded'>
                <input type="text" className=''/>
                <SearchIcon className='searchIcon'/>
            </label>
        </div>
        {/* d-flex justify-content-around align-item-center mx-5 */}
        <div className="header_right_icon d-flex align-items-center ms-5 gap-3">
            <IconButton >
                <HomeOutlinedIcon />
            </IconButton>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
           
            <Dropdown>
                <Dropdown.Toggle variant='white'  id="dropdown-basic">
                    <IconButton id="dropdown-basic">
                        <Avatar />
                    </IconButton>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Medical Record</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
   
   </div>
  )
}

export default Header