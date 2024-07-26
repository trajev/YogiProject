import React from 'react'
import Navbar from './navbar'
import PracticeCard from './PracticeCard'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import Footer from './Footer'
import SixthSection from './SixthSection'
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='md:max-w-[90vw] mx-auto my-20'>
        <FirstSection/>
        <SecondSection/>
       <ThirdSection/>
       <FourthSection/>
        <FifthSection/>
        <SixthSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
