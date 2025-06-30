import React from 'react'
import Footer from '../components/Footer'
import UserCardList from '../components/UserCardList'

const Skills = () => {
  return (
  <>
  <div className="flex flex-col min-h-screen">
        {/* Your content */}
        <div className="flex-grow">
        <UserCardList/>

        </div>
        <Footer />
      </div>
  </>
  )
}

export default Skills