import React from 'react'
import "./BannerApp.css"
import appImg from '../../images/app.jpg'
function BannerApp() {
  return (
    <div className='BannerApp d-flex justify-content-around align-items-center gap-3 p-2'>
        <div className='app_info d-flex flex-column align-items-start justify-content-centetr gap-3 ms-4'>
            <h1>Find Your Doctor and <br/>Make an Appointment</h1>
            <p>Select preferred doctor to booked <br/> an appointment and consultation</p>
        </div>
        <div className='img-wrapper'>
            <img src={appImg} alt="" />
        </div>
    </div>
  )
}
export default BannerApp