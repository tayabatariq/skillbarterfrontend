import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Homecarosal from '../components/Homecarosal'
import Homecenter from '../components/Homecenter'

const Home = () => {
  return (
    <>
   <div className="flex flex-col min-h-screen">
      {/* Your content */}
      <Homecarosal/>
      <Homecenter/>
      <div className="flex-grow">...</div>
      <Footer />
    </div>
    </>
  )
}

export default Home