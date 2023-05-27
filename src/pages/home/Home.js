import React from 'react'
import Banner from '../../components/homeComponents/Banner'
import Vision from '../../components/homeComponents/Vision'
import Services from '../../components/homeComponents/Services'
import Worker from '../../components/homeComponents/Worker'
import Anouncement from '../../components/homeComponents/Anouncement'
import HealthVideo from '../../components/homeComponents/HealthVideo'
function Home() {
  return (
    <div className='home'>
        <Banner />
        <Vision />
        <Services />
        <Worker />
        <Anouncement />
        <HealthVideo />
    </div>
  )
}

export default Home