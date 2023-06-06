import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/homeComponents/Header';
import Record from './pages/record/Record';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import OnlineDoctor from './components/online/OnlineDoctor'

import PatientAppointment from './pages/appointment/patient/PatientAppointment';
import DoctorAppointment from './pages/appointment/doctor/DoctorAppointment';
import useAuthContext from './hooks/useAuthContext';
import { useEffect } from 'react';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import AppForm from './components/appointment/AppForm';
import { projectAuth } from './firebase/config';
import { projectFirestore } from './firebase/config';
import { doc, collection, getDoc, onSnapshot } from 'firebase/firestore'
import { signInWithCustomToken } from 'firebase/auth'

// import useAuthContext from './hooks/useAuthContext';
function App() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false)
  const { authIsReady, user, log, sign, dispatch } = useAuthContext()

  // const {dispatch, user} = useAuthContext()
  const [paDoc, setpDoct] = useState([])
  const toggleSidebar = () => {
    console.log(showSidebar)
    setShowSidebar(!showSidebar)
  }
  // useEffect(() => {
  //   localStorage.clear()
  //   // Set a cookie with SameSite=None and Secure
  //   const userToken = localStorage.getItem('userToken');
  //   signInWithCustomToken(projectAuth, userToken).then(()=>{
  //     dispatch({type: "LOGIN", payload: user})
  //   }).catch(error => {
  //     console.error(error);
  //   });
  //   return () => {
  //     setIsCancelled(true);
  //   };
  //   // document.cookie = 'mycookie=myvalue; SameSite=None; Secure';
  // }, [dispatch]);
  useEffect(() => {
    localStorage.clear();
  }, []);
  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged(user => {
      // setUser(user);
      // store user data in local storage
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, []);


  const [userType, setUserType] = useState('');
  //   useEffect(()=>{

  //     const unsub = onSnapshot(doc(collection(projectFirestore, 'users'), user.uid), (snapshot)=>{
  //         if(!snapshot.empty){
  //             setUserInfo(snapshot.data())
  //         }
  //     })
  //     return ()=> unsub

  //  },[user.uid])

  useEffect(() => {
    let unsubscribe;
    if (log && user?.uid) {
      const uid = user.uid;

      const getUserType = async () => {
        const userRef = doc(collection(projectFirestore, 'users'), uid);
        const doctorRef = doc(collection(projectFirestore, 'doctors'), uid);

        unsubscribe = onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            setUserType(doc.data().type);
          }
        });

        onSnapshot(doctorRef, (doc) => {
          if (doc.exists()) {
            setUserType(doc.data().type);
          }
        });
      };

      getUserType();
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [log])

  // console.log("User type", userType)
  // console.log("initial use", user)
  // console.log('log', log)
  // console.log('sing', sign)
  // console.log(authIsReady)
  return (
    <div className={log ?`fixed`:`app`}>
      {/* <Home/> */}
      
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signup' element={sign ? <Navigate to='/login' /> : <Signup />} />
          <Route path='/login' element={log ? <Navigate to='/dashboard' /> : <Login />} />
          <Route path='/dashboard/*' element={userType === 'doctor' ?
            <>
              <Header />
              <div className='home-content d-flex justify-content-between gap-5'>
                <Sidebar type='doctor'/>
                <div className='mid-container'>
                  <Dashboard />
                  <Routes>
                    <Route path='/record' element={<Record type='doctor' />} />
                    <Route path='/doctorApp/' element={<DoctorAppointment type='doctor' />} />
                    <Route path='/doctorApp/:id' element={<DoctorAppointment type='doctor' />} />
                    
                  </Routes>
                </div>
                <OnlineDoctor />
              </div>
            </> :
            <>
              <Header />
              <div className='home-content d-flex justify-content-between gap-5'>
                <Sidebar type='patient'/>
                <div className='mid-container'>
                  <Dashboard />
                  <Routes>
                    <Route path='/record' element={<Record type='patient' />} />
                    <Route path='/appointment/' element={<PatientAppointment type='patient' />} />
                    <Route path='/appointment/:id' element={<PatientAppointment type='patient' />} />
                  </Routes>
                </div>
                <OnlineDoctor />
              </div>
            </>
          } />
        </Routes>

      </BrowserRouter>:
  
    </div>
  );
  // return (
  //   <div className="app">
  //     {
  //       <BrowserRouter>

  //       <Routes>

  //         <Route exact path='/' element={<h1>ksfn</h1>}/>
  //         <Route path='/signup' element={sign ? <Navigate to='/login'/>: <Signup/>}/>
  //         <Route path='/login' element={log? <Navigate to='/dashboard'/>: <Login/>}/>
  //         {/* <Route path='/dashboard' element={userType ==='doctor'?<h1>its doctor</h1>:<h1>tis patiein</h1>}/> */}

  //         <Route path='/dashboard/*' element={ userType ==='doctor' ? <>
  //           <Header />
  //           <div className='home-content d-flex justify-content-between gap-5'>
  //               <Sidebar/>
  //                 <div className='mid-container'>
  //                     <Dashboard />
  //                     <Routes>
  //                       <Route exact path='record' element={<Record/>}/>
  //                       <Route path='priscription' element={<DoctorAppointment />}/>
  //                       <Route path='/doctorApp' element={<DoctorAppointment />}/>
  //                     </Routes>
  //               </div>
  //             <OnlineDoctor />
  //           </div>
  //         </>:<></>} />


  //       </Routes>
  //       </BrowserRouter>
  //     }

  //   </div>
  // );
}

export default App;

// import { BrowserRouter, Routes, Route , Navigate, useNavigate} from 'react-router-dom';
// import './App.css';
// import Header from './components/homeComponents/Header';
// import Record from './pages/record/Record';
// import { useState } from 'react';
// import Sidebar from './components/sidebar/Sidebar'
// import Dashboard from './components/dashboard/Dashboard'
// import OnlineDoctor from './components/online/OnlineDoctor'

// import PatientAppointment from './pages/appointment/patient/PatientAppointment';
// import DoctorAppointment from './pages/appointment/doctor/DoctorAppointment';
// import useAuthContext from './hooks/useAuthContext';
// import { useEffect } from 'react';
// import Home from './pages/home/Home'
// import Login from './pages/login/Login';
// import Signup from './pages/signup/Signup';
// import AppForm from './components/appointment/AppForm';
// function App() {
//   const [showSidebar, setShowSidebar] = useState(false)
//   const {authIsReady, user, log, sign} = useAuthContext()

//   const toggleSidebar = () =>{
//     console.log(showSidebar)
//     setShowSidebar(!showSidebar)
//   }
//   useEffect(() => {
//     // Set a cookie with SameSite=None and Secure
//     document.cookie = 'mycookie=myvalue; SameSite=None; Secure';
//   }, []);
//   return (  
//     <div className="app d-flex flex-column ">
//         {authIsReady && (

//             <BrowserRouter>
//                 {user? <>

//                     <Routes>
//                       <Route exact path='*' element={log? (<>
//                         <Header/>
//                       <div className='home-content d-flex justify-content-between gap-5'>
//                         <Sidebar/>
//                           <div className='mid-container'>
//                               <Dashboard />
//                               <Routes>
//                                 <Route path='/record' element={<Record/>}/>
//                                 <Route path='/priscription' element={<h1>Hello</h1>}/>
//                                 <Route path='/doctorApp' element={<DoctorAppointment />}/

//                               </Routes>
//                           </div>
//                         <OnlineDoctor />
//                       </div>
//                       </>):<Login/>} />
//                       <Route path='/signup' element={sign? <Navigate to='/login'/>: <Signup />}/>
//                       <Route path='/login' element={log? <Navigate to='/'/>: <Login/>}/>
//                     </Routes>
//                 </>: 
//                   <Routes>
//                     <Route exact path='/' element={<>
//                       <Header/>
//                       <Home/>
//                     </>}/>
//                     <Route path='/signup' element={sign? <Navigate to='/login'/>: <Signup />}/>
//                     <Route path='/login' element={log? <Navigate to='/'/>: <Login/>}/>
//                   </Routes>
//               }
//             </BrowserRouter>
//         )}
//     </div>

//   );
// }
// export default App;

{/* <div>
          <Header/>
          <div className='home-content d-flex justify-content-between gap-5'>
            <Sidebar/>
              <div className='mid-container'>
                <BrowserRouter>
                  <Dashboard />
                <Routes>
                  <Route path='/signup' element={<Signup />}/>
                  <Route path='/patientApp' element={<PatientAppointment />}/>
                </Routes>
              </BrowserRouter>
              </div>
            <OnlineDoctor />
          </div>
          
        </div> */}
