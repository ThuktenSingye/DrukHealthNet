import { useState, useEffect } from "react"
export const useDivide = (info) =>{
    const [contents, setContents] = useState([])
  useEffect(()=>{
    const generateCarouselItems = () =>{
      const carouseItems = []
      const idList = []
      let loopTimes = Math.ceil(info.length / 3)
      for (let i =0;i< loopTimes; i++){
        const threeUser = []
        info.every((user)=>{
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
      setContents(carouseItems)
    }
    generateCarouselItems()
  },[info])

  return {contents:contents }
}