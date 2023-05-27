import React from 'react'
import "./Vision.css"
import visionImg from '../../images/doctor.png'
import Button from '@material-ui/core/Button'
function Vision() {
  return (
    <div className='vision position-relative d-flex  '>
       <div className="row px-5">
        <div className="vision_img col-lg-6 col-md-6 col-sm-12 align-self-end">
            <img src={visionImg} alt="Vision_Image" />
        </div>
        <div className="vision_discription col-lg-6 col-md-6 col-sm-12 d-flex flex-column gap-5 align-items-start mt-5 pt-5">
            <h1 className='display-3 fw-bold mt-5'>Vision</h1>
            <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusamus asperiores non consectetur veniam voluptate vitae, 
            debitis unde sit cum? Quam repellat illo enim, fugit officia
            alias minus! Laboriosam, incidunt recusandae!</p>
            <Button className='btn-lg rounded-1'>Read More</Button>
        </div>        
       </div>
    </div>
  )
}

export default Vision