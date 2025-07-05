import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Homecarosal from '../components/Homecarosal'
import Homecenter from '../components/Homecenter'
import ChatBot from '../components/ChatBot'

const Home = () => {
  return (
    <>
   <div className="flex flex-col min-h-screen">
      {/* Your content */}
      <Homecarosal/>
      <Homecenter/>
      <ChatBot/>
      <div className="flex-grow"></div>
      <Footer />
    </div>
    </>
  )
}

export default Home