import React from 'react'
import './DoctorFilter.css'
// import React from 'react';
import { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { Button } from '@material-ui/core';


const doctorCategories = [
    {title: 'All'},
    {title: 'Dentist'},
    {title: 'Surgeon'},
    {title: 'Pediatrician'},
    {title: 'Gynecologist'},
    {title: 'Cardiologies'}
]
function DoctorFilter() {
  return (
    <div className='doctor_filter mb-5'>
        <OwlCarousel
            className="owl-theme filter_cat"
            dots={true}
            loop={true}
            margin={10}
            nav={true}
            autoplaySpeed={1000}
            items={5}
            navSpeed={1000}
        >
        {
            doctorCategories.map((doctor, index)=>(
                <div key={index} className='text-center'>
                    <Button className='filter_btn rounded-2'>{doctor.title}</Button>
                </div>
            ))
        }

      </OwlCarousel>
     
    </div>
  )
}

export default DoctorFilter