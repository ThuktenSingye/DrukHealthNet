import React from 'react'
import './WorkerCard.css'
import Image from 'react-bootstrap/Image'
function WorkerCard({userSet}) {

  return (
    <div className='workerCard container d-flex justify-content-between align-content-center'>
      {
        userSet.map((user)=>(
          <div key={user.id} className='workerCard_content  '>
            <div className="img_wrapper ">
              <img src={user.imgSrc} alt="" />
              {/* <Image src={user.imgSrc} /> */}
            </div>
            <div className="user_info d-flex flex-column justify-content-end align-items-start text-center g-0">
              <h2 className='d-block'>{user.userName}<br/><span>{user.specialist}</span> </h2>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default WorkerCard