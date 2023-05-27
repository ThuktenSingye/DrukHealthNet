import React from 'react'
import "./Services.css"

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ServicesCard from './ServicesCard';

function Services() {
  return (
    <div className='services container-sm d-flex flex-column '>
        <div className="services_body d-flex flex-column justify-content-center align-items-center my-5 mx-5">
            <div className="servics_body_head">
               <ServicesCard 
            //    IconImg={AccessAlarmIcon}
               title='Medical Record'
               discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur
               earum quidem vel corporis aliquid cumque tempora dolor nesciunt. 
               Sapiente fuga laboriosam, provident ullam quasi iure perspiciatis voluptatibus
               necessitatibus repellendus.' 
               linkto='/'
               />
            </div>
            <div className="services_body_mid">
                <ServicesCard 
                // iconImg={AccessAlarmIcon} 
                title='Medical Record'
                discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur
                earum quidem vel corporis aliquid cumque tempora dolor nesciunt. 
                Sapiente fuga laboriosam, provident ullam quasi iure perspiciatis voluptatibus
                necessitatibus repellendus.' 
                linkto='/'
                />
        
                <div className="title"> 
                    <h1 className="text-center fw-semibold fs-1  ">Services</h1>
                </div>
            
               <ServicesCard 
            //    iconImg={AccessAlarmIcon} 
               title='Medical Record'
               discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur
               earum quidem vel corporis aliquid cumque tempora dolor nesciunt. 
               Sapiente fuga laboriosam, provident ullam quasi iure perspiciatis voluptatibus
               necessitatibus repellendus.' 
               linkto='/'
               />
            </div>
            <div className="services_body_bottom">
                <div className="servics_body_head">
                <ServicesCard 
                // iconImg={AccessAlarmIcon} 
                title='Medical Record'
                discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur
                earum quidem vel corporis aliquid cumque tempora dolor nesciunt. 
                Sapiente fuga laboriosam, provident ullam quasi iure perspiciatis voluptatibus
                necessitatibus repellendus.' 
                linkto='/'
                />
                </div>
            </div>  
        </div>
    </div>
  )
}
export default Services