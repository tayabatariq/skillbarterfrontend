import React from 'react'
import Footer from '../components/Footer'
import Userownprofile from '../components/Userownprofile'
import ChatBot from '../components/ChatBot'

const Profilepage = () => {
  return (
    
     <>
   <div className="flex flex-col min-h-screen">
        <div className="bg-gray-100 min-h-screen py-10 px-4">
      <Userownprofile />
    </div>
      <ChatBot/>
      <div className="flex-grow"></div>
      <Footer />
    </div>
    </>
  )
}

export default Profilepage