import { useState, useEffect } from "react"
import { ref, getDownloadURL } from 'firebase/storage'
import { projectStorage } from "../firebase/config";

const useAvatar = ({ id, type}) => {
  const [imgUrl, setImgUrls] = useState([]);

  useEffect(() => {
    if(id){
      getDownloadURL(ref(projectStorage, type==='patient'? `profileImage/${id}/IMG_0557.JPG`:`docAvatar/${id}`))
      // getDownloadURL(ref(projectStorage,  `docAvatar/${id}/*`))
      .then((url)=>{
        setImgUrls(url);
      }).catch(err=>{
        console.log(err)
      })
    }
  
  }, [id]);

  return { imgUrl};
}

export default useAvatar;
// type ==='patient'? 