import React from 'react'
import "./Services.css"
import Button from '@material-ui/core/Button'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import IconButton  from '@material-ui/core/IconButton';

function Services() {
  return (
    <div className='services container d-flex flex-column '>
        <div className="services_body d-flex flex-column justify-content-center align-items-center gap-5 my-5 mx-3">
            <div className="servics_body_head">
               <div className="services_card">
                    <div className="icon_wrapper">
                        <IconButton>
                            <AccessAlarmIcon />
                        </IconButton>
                    </div>
                    <div className="services_discription">
                        <h1>Medical Record</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur
                        earum quidem vel corporis aliquid cumque tempora dolor nesciunt. 
                        Sapiente fuga laboriosam, provident ullam quasi iure perspiciatis voluptatibus
                        necessitatibus repellendus.</p>
                    </div>
                    <a href=""><Button className='btn-lg rounded-1 btn1'>View Services</Button></a>
                </div>
            </div>
            <div className="services_body_mid">
            <div className="services_card">
                <div className="icon_wrapper">
                    <IconButton>
                            <AccessAlarmIcon />
                    </IconButton>
                </div>
                <div className="services_discription">
                    <h1>Medical Record</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur
                    earum quidem vel corporis aliquid cumque tempora dolor nesciunt. 
                    Sapiente fuga laboriosam, provident ullam quasi iure perspiciatis voluptatibus
                    necessitatibus repellendus.</p>
                </div>
                    <a href=""><Button className='btn-lg rounded-1 btn1'>View Services</Button></a>
                </div>
                <div className="services_card">
                    <div className="icon_wrapper">
                        <IconButton>
                            <AccessAlarmIcon />
                        </IconButton>
                    </div>
                    <div className="services_discription">
                        <h1>Medical Record</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur
                        earum quidem vel corporis aliquid cumque tempora dolor nesciunt. 
                        Sapiente fuga laboriosam, provident ullam quasi iure perspiciatis voluptatibus
                        necessitatibus repellendus.</p>
                    </div>
                    <a href=""><Button className='btn-lg rounded-1 btn1'>View Services</Button></a>
                </div>

            </div>
            <div className="services_body_bottom">
            <div className="services_card">
                <div className="icon_wrapper">
                    <IconButton>
                        <AccessAlarmIcon />
                    </IconButton>
                </div>
                    <div className="services_discription">
                        <h1>Medical Record</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo pariatur
                        earum quidem vel corporis aliquid cumque tempora dolor nesciunt. 
                        Sapiente fuga laboriosam, provident ullam quasi iure perspiciatis voluptatibus
                        necessitatibus repellendus.</p>
                    </div>
                    <a href=""><Button className='btn-lg rounded-1 btn1'>View Services</Button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services