import { BrowserRouter, Routes, Route , Navigate, useNavigate} from 'react-router-dom';
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
function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const {authIsReady, user, log, sign} = useAuthContext()

  const toggleSidebar = () =>{
    console.log(showSidebar)
    setShowSidebar(!showSidebar)
  }
  useEffect(() => {
    // Set a cookie with SameSite=None and Secure
    document.cookie = 'mycookie=myvalue; SameSite=None; Secure';
  }, []);
  return (  
    <div className="app d-flex flex-column ">
        {authIsReady && (
      
            <BrowserRouter>
              {/* <Routes> */}
                {user? <>
                  {/* check for check for singup if singup , then redirec to logon */}
                  {/* if login then redirect to dashboard else to login */}
                    <Routes>
                      <Route exact path='*' element={log? (<>
                        <Header/>
                      <div className='home-content d-flex justify-content-between gap-5'>
                        <Sidebar/>
                          <div className='mid-container'>
                              <Dashboard />
                              <Routes>
                                <Route path='/record' element={<Record/>}/>
                                <Route path='/priscription' element={<h1>Hello</h1>}/>
                                <Route path='/appointment' element={<PatientAppointment />}/>
                              </Routes>
                          </div>
                        <OnlineDoctor />
                      </div>
                      </>):<Login/>} />
                      <Route path='/signup' element={sign? <Navigate to='/login'/>: <Signup />}/>
                      <Route path='/login' element={log? <Navigate to='/'/>: <Login/>}/>
                    </Routes>
                </>: 
                  <Routes>
                    <Route exact path='/' element={<>
                      <Header/>
                      <Home/>
                    </>}/>
                    <Route path='/signup' element={sign? <Navigate to='/login'/>: <Signup />}/>
                    <Route path='/login' element={log? <Navigate to='/'/>: <Login/>}/>
                  </Routes>
              }
            </BrowserRouter>
        )}
    </div>

  );
}
export default App;

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