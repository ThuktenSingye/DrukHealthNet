import { projectAuth, projectFirestore, projectStorage } from "./config";
import {createUserWithEmailAndPassword}  from 'firebase/auth'
// import useFirestore from '../hooks/useFirestore';
// lets add doctors to the list
const doctors = require('./doctorDb')


createUserWithEmailAndPassword(doctors[0].email, doctors[0].password)
.then((userDoc)=>{
    const user = userDoc.user;
    console.log("Uid", user.uid)
})