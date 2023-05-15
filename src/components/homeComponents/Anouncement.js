import React from 'react'
import "./Anouncement.css"
import AnnouncementWidget from './AnnouncementWidget'
import image from '../../images/announce.jpg'
import Button  from '@material-ui/core/Button'

const announcementInfo= [
  {imgSrc: image, title: 'Vaccine', overview:"csdlknc dscnsdknc cdslnkc dslkcnsdl csdklncs slkdnas asldna", id:1},
  {imgSrc: image, title: 'Vaccine', overview:"csdlknc dscnsdknc cdslnkc dslkcnsdl csdklncs slkdnas asldna", id: 2},
  {imgSrc: image, title: 'Vaccine', overview:"csdlknc dscnsdknc cdslnkc dslkcnsdl csdklncs slkdnas asldna", id: 3},
  
]
function Anouncement() {
  return (
    <div className='announcement container-sm d-flex justify-content-around align-content-center flex-column'>
        <h1 className='text-center mb-3'>Announcement</h1>
       <div className="announcement-widget-container d-flex justify-content-evenly align-items-center gap-5">
        {
          announcementInfo.map((announcement)=>(
            <AnnouncementWidget
            key={announcement.id} 
            imgSrc={announcement.imgSrc} 
            title={announcement.title} 
            overview={announcement.overview}/>
          ))
        }
        </div> 
        <div className="announcement-view d-flex align-self-end me-5 mt-3 ">
          {/* <h1>hkge</h1> */}
          <Button className='rounded-1'>View More</Button>
        </div>
    </div>
  )
}

export default Anouncement