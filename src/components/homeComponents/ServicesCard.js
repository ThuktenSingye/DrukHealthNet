import React from 'react'
import "./ServicesCard.css"
import IconButton  from '@material-ui/core/IconButton'
import Button  from '@material-ui/core/Button'
function ServicesCard({title, discription, linkto}) {
  return (
    <div className='servicesCard'>
        <div className="icon_wrapper">
            {/* {<IconImg />} */}
        </div>
        <div className="services_discription">
            <h5 className='fs-2'>{title}</h5>
            <p>{discription}</p>
        </div>
        <a href={linkto}><Button className='rounded-1 btn1'>View Services</Button></a>
    </div>
  )
}

export default ServicesCard