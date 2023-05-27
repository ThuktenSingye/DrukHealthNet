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

import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const {authIsReady, user} = useAuthContext()
  
  const toggleSidebar = () =>{
    console.log(showSidebar)
    setShowSidebar(!showSidebar)
  }
  return (
    <div className="app d-flex flex-column ">
        <Header/>
        <div className='home-content d-flex justify-content-between '>
          <Sidebar/>
            <div className='mid-container'>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/patientApp' element={<PatientAppointment />}/>
              </Routes>
            </BrowserRouter>
            </div>
          <OnlineDoctor />
        </div>
      
    </div>
  );
}
export default App;

