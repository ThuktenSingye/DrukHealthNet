import React, { useState , useEffect} from 'react'
import "./Worker.css"
import WorkerCard from './WorkerCard'
import Carousel from 'react-bootstrap/Carousel'
const workerInfo = [
    {imgSrc:'https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg', userName: 'Dorji Kinley', specialist: 'Dentist', id: 1},
    {imgSrc:'https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg', userName: 'Pema Dorji', specialist: 'Dentist', id: 2},
    {imgSrc:'https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg', userName: 'Sangay', specialist: 'Dentist', id: 3},
    {imgSrc:'https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg', userName: 'Tashi Choyel', specialist: 'Dad', id: 4},
    {imgSrc:'https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg', userName: 'Yeshi Seldon', specialist: 'Mom', id: 5},
    {imgSrc:'https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg', userName: 'Tshering Lhaki ', specialist: 'Sister', id: 6}
]

function Worker() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    const generateCarouselItems = (workerInfo) =>{
      const carouseItems = []
      const idList = []
      let loopTimes = Math.ceil(workerInfo.length / 3)
      for (let i =0;i< loopTimes; i++){
        const threeUser = []
        workerInfo.every((user)=>{
          if (!idList.includes(user.id)){
            idList.push(user.id)
            threeUser.push(user)
          }
          if (threeUser.length === 3){
            return false
          }
          return true;
        })
        // now based three user have been fetch and pass this user to carousel 
        carouseItems.push(threeUser)
      }
      setUsers(carouseItems)
    }
    generateCarouselItems(workerInfo)
  },[])
 
  return (
    <div className='worker '>
      <h1 className="display-5 fw-semibold text-center">Staff and Worker</h1>
      <Carousel fade interval={5000} className='worker-carousel'>
      {
        users.map((userSet, index)=>(
          <Carousel.Item className='worker-carousel-item' key={index}>
            <WorkerCard userSet={userSet} />
          </Carousel.Item>
        ))
      }
      </Carousel>  
      
    </div>
  )
}

export default Worker
// logic inside the function 
// initialized the id list to hold the user
// loop the user list
// create an empty list to hold three set of user threeSet
//  loop again the user list
// check if the user id is on id list. if there skip else append both on id list and in threeSet. 
// check if threeSet lenth is three. if so then break out of inner loop
//
// function shuffle(userList){
//   const shuffledIndex = []
//   const shuffledList = []
//   while (shuffledIndex.length < userList.length){
//     let randomValue = Math.floor(Math.random() * userList.length)
//     if(!shuffledIndex.includes(randomValue)){
//       shuffledIndex.push(randomValue)
//       shuffledList.push(userList[randomValue])
//     }
//   }
//   return shuffledList
// }