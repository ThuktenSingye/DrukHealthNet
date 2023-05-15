import React from 'react'
import "./HealthVideo.css"
import { useDivide } from '../../hooks/useDivide'
import VideoCard from './VideoCard'
const videoList = [
  {videoUrl:'https://www.youtube.com/embed/5SZJ3D39uYk',title:'titl1' , id:1},
  {videoUrl:'https://www.youtube.com/embed/5SZJ3D39uYk',title:'titl2' , id:2},
  {videoUrl:'https://www.youtube.com/embed/5SZJ3D39uYk',title:'titl3' , id:3},
  {videoUrl:'https://www.youtube.com/embed/5SZJ3D39uYk',title:'titl4' , id:4},
  {videoUrl:'https://www.youtube.com/embed/5SZJ3D39uYk',title:'titl5' , id:5},
  {videoUrl:'https://www.youtube.com/embed/5SZJ3D39uYk',title:'titl6' , id:6},
]
function HealthVideo() {
  const {contents} = useDivide(videoList)

  return (
    <div className='healthVideo mt-5 mb-5'>
        <h1 className="text-center fw-semibold fs-1 mb-5 ">HealthVideo</h1>
        <VideoCard contents={contents}/>
    </div>
  )
}

export default HealthVideo