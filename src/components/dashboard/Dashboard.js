import React from 'react'

// import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './Dashboard.css'
import im1 from '../../images/grasp.jpg'
import img2 from '../../images/vision.png'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';

import { Button } from '@mui/material';

const dashInfo= [
  {title:'Medical Record', color:'#FFD500', id: 1},
  {title: 'Appointment', color: '#398AC6', id:2},
  {title: 'Priscription', color:'#FF971C', id: 3},
  {title: 'Doctor', color: '#3CB04C', id: 4}
]


function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Overview</h1>
      <OwlCarousel
      className="owl-theme "
      dots={true}
      loop={true}
      margin={10}
      nav={true}
      autoplaySpeed={1000}
      items={3}
      navSpeed={1000}
      >
        {dashInfo.map((dashCard)=>(
          <div className="item me-3" key={dashCard.id}>
             <Card>
            <div className="header d-flex ">
              <CardHeader title={dashCard.title} className='ps-4' sx={{color:'#6859F3'}} />
              <div className='rect' style={{width: '50px', height: '60px', position: 'absolute', top: '0', right: '0', backgroundColor: `${dashCard.color}`}}>
              </div>
            </div>
            <Divider className='divider' sx={{backgroundColor:'#6859F3', marginTop: '10px', height:'2px', opacity: 1}}/>
            <CardContent className='d-flex w-100 p-3 justify-content-between align-content-center'>
              <div>
                <Typography className='mt-2 p-2 lead'>
                    {`You can view your ${dashCard.title.toLowerCase()} here..`}
                </Typography>
                <CardActions>
                  <Button className='rounded-1 butn'>View Details</Button>
                </CardActions>
              </div>
              <div style={{width: '100px', height:'100px', alignSelf: 'center'}}>
                <ExpandMoreIcon/>
              </div>
            </CardContent>
          </Card>
          </div>
        ))}
       

    
      </OwlCarousel>
    </div>
  )
}

export default Dashboard