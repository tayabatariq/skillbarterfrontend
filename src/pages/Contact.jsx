import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ChatBot from '../components/ChatBot'

const Contact = () => {
  return (<>
  <div className="flex flex-col min-h-screen">
        {/* Your content */}

        <ContactForm/>
              <ChatBot/>
        
        <div className="flex-grow"></div>
        <Footer />
      </div>
  </>
  )
}

export default Contact