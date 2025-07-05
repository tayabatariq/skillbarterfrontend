import React from 'react'
import Footer from '../components/Footer'
import Aboutheader from '../components/Aboutheader'
import ChatBot from '../components/ChatBot'

const About = () => {
  return (
<>
<div className="flex flex-col min-h-screen">
      {/* Your content */}
      <Aboutheader/>
            <ChatBot/>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
</>  )
}

export default About