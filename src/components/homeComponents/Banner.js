import React from 'react'
import "./Banner.css"
// import banner
import bannerImg1 from '../../images/doctor_banner2.png'
import bannerImg2 from '../../images/appointment_ori.png'
import bannerImg3 from '../../images/MedicalRecord.png'

import BannerCard from './BannerCard'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <div className='banner'>
      <Carousel fade interval={5000} >
        <Carousel.Item>
          <BannerCard bannerImg={bannerImg1}/>
        </Carousel.Item>
        <Carousel.Item>
        <BannerCard bannerImg={bannerImg2}/>
        </Carousel.Item>
        <Carousel.Item>
        <BannerCard bannerImg={bannerImg3}/>
        </Carousel.Item>
      </Carousel>       
    </div>
  )
}

export default Banner
 //   className="d-block w-100"