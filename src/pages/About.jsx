import React from 'react'
import Footer from '../components/Footer'
import Aboutheader from '../components/Aboutheader'

const About = () => {
  return (
<>
<div className="flex flex-col min-h-screen">
      {/* Your content */}
      <Aboutheader/>
      <div className="flex-grow"></div>
      <Footer />
    </div>
</>  )
}

export default About