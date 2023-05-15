import React from 'react'
import './AnnouncementWidget.css'
import Button  from '@material-ui/core/Button'
function AnnouncementWidget({imgSrc, title, overview}) {
  return (
    <div className='announcement-widget col-lg-3 col-md-6 col-sm-12 d-flex' style={{
            backgroundSize: 'cover',
            backgroundImage: `url("${imgSrc}")`,
            backgroundPosition: 'center center'
          }} >
            <div className="announcement-widget-content d-flex flex-column justify-content-between ">
                <h1>{title}</h1>
                {/* <p>{overview}</p> */}
                <Button className='rounded-1'>Read More</Button> 
            </div>
    </div>
  )
}

export default AnnouncementWidget