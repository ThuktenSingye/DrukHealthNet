import React, { useState } from 'react'
import "./Header.css"
// importing icon
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MessageIcon from '@material-ui/icons/Message';
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Icon, IconButton } from '@material-ui/core';
import Nav from 'react-bootstrap/Nav';
import Badge from '@material-ui/core/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
// import Button
import { Button } from '@mui/material';
import useAuthContext from '../../hooks/useAuthContext';
import useLogout from '../../hooks/useLogOut'
function Header({toggleSidebar}) {
    const {isPending, error ,logout} = useLogout()
    const handleLogout = ()=>{
        logout()
    }
  return (
   <div className='header container-fluid d-flex justify-content-between align-items-center p-1 bg-white position-sticky top-0 start-0 navbar-light shadow-sm '>
    <div className="header_left d-flex align-items-center ms-5">
            <IconButton className='sideGroup' onClick={toggleSidebar}>
                <HomeOutlinedIcon />
            </IconButton>
        <img src="" alt="" />
       <span className='fw-bold fs-2 title'>Druk Health Net</span>
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
                <Badge badgeContent={4} color="primary">
                    <MessageIcon />
                </Badge>
                {/* <MessageIcon /> */}
            </IconButton>
            <IconButton>
                <Badge badgeContent={4} color="primary">
                    <NotificationsOutlinedIcon />
                </Badge>
                
            </IconButton>
            <Dropdown>
                <Dropdown.Toggle variant='white'  id="dropdown-basic">
                    {/* <div id="dropdown-basic">
                        <Avatar />
                    </div> */}
                    {/* <IconButton id="dropdown-basic">  */}
                        <Avatar />
                    {/* </IconButton> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Medical Record</Dropdown.Item>
                    <Button onClick={handleLogout}>
                        <Dropdown.Item >Log out</Dropdown.Item>
                    </Button>
                    {/* <Dropdown.Item href="#/acti">Log out</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
   
   </div>
  )
}
export default Header

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function Header() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
    
//     <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//     </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 , zIndex: 1500}}>
//       <AppBar position="sticky" sx={{
//           width: '100%',
//           bgcolor:'white',
//           color: 'black',
          
//           // border:' none',
//           // boxShadow: 'none
//           m:'0',
//           p:'0' }}>
//         <Toolbar>
          
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             DRUK HEALTH NET
//           </Typography>
//           <Search sx={{ marginLeft: '2rem'}}>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//         <Box sx={{ display: { xs: 'none', md: 'flex' , gap:'1rem'} }}>
//           <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="error">
//                 <HomeOutlinedIcon />
//               </Badge>
//             </IconButton>
//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }
