import React from 'react'
import "./BannerCard.css"
import Card from 'react-bootstrap/Card';
import { NavLink  } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
function BannerCard({bannerImg}) {
  return (
    <div className='bannerCard'>
         <Card className="bg-dark text-white">
            <Card.Img src={bannerImg} alt="Card image" />
            <Card.ImgOverlay className='d-flex  flex-column justify-content-center align-items-center gap-0'>
                <Card.Text className='mb-4 text-center'>
                  <span className='fw-bold text-white display-2 r'>WELCOME TO</span> <br/>
                  <span className='fw-bolder text-white display-2'>DRUK HEALTH NET</span>
                </Card.Text>

                <Card.Text className='overview-text lead text-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem doloremque ipsa fugiat quod possimus, adipisci labore 
                    modi eligendi? Illum atque voluptatibus itaque iusto maxime dolor necessitatibus, 
                    sapiente voluptatem delectus ipsam.
                </Card.Text>
                {/* className=`user ? explore: enter` */}
                <div className='enter mt-4 d-flex gap-4'>
                  <Button  className='btn-lg lead text-white rounded-1'>Login</Button>
                  <Button  className='btn-lg lead text-white rounded-1'>Signup</Button>
                  
                </div>
            </Card.ImgOverlay>
        </Card>
    </div>
  )
}

export default BannerCard