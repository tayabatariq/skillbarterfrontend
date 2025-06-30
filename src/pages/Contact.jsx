import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (<>
  <div className="flex flex-col min-h-screen">
        {/* Your content */}

        <ContactForm/>
        <div className="flex-grow"></div>
        <Footer />
      </div>
  </>
  )
}

export default Contact