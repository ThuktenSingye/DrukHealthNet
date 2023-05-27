import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAkmhcn0mLK6CezHD-q-VHDMKss3n7iU-M",
    authDomain: "drukhealthnet.firebaseapp.com",
    projectId: "drukhealthnet",
    storageBucket: "drukhealthnet.appspot.com",
    messagingSenderId: "1035418277520",
    appId: "1:1035418277520:web:e47a6c69b3ca8ac48caa15",
    measurementId: "G-W2PNNBCKGL"
};
// init firebase
const app = initializeApp(firebaseConfig)

// init firebase services
const projectFirestore = getFirestore(app)
const projectAuth = getAuth(app)
const projectStorage = getStorage(app)

export {projectFirestore ,projectAuth, projectStorage}
