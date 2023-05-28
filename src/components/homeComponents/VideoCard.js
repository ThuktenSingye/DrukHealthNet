import React from 'react'
import './VideoCard.css'
function VideoCard({contents}) { 
    return (
    <div className='videoList container d-flex flex-column align-items-center'>
        {
            contents.map((content, index)=>(
                <div className="row d-flex justify-content-between align-items-center mb-3" key={index}>
                       {content.map((video, index)=>(
                            <div className="embed-responsive embed-responsive-16by9 col-lg-4 " key={index}>
                                <iframe className="embed-responsive-item rounded-4 w-100" title={video.title} src={video.videoUrl} allowFullScreen></iframe>
                            </div>
                       ))} 
                </div>
            ))
        }
    </div>
  )
}

export default VideoCard