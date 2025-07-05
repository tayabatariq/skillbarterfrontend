import React from 'react'
import Footer from '../components/Footer'
import UserCardList from '../components/UserCardList'
import ChatBot from '../components/ChatBot'

const Skills = () => {
  return (
  <>
  <div className="flex flex-col min-h-screen">
        {/* Your content */}
        <div className="flex-grow">
        <UserCardList/>
      <ChatBot/>

        </div>
        <Footer />
      </div>
  </>
  )
}

export default Skills