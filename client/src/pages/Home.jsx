import React from 'react'
import MainBanner from '../components/MainBanner'
import Catergories from '../components/Catergories'
import BestSellers from '../components/BestSellers'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Catergories/>
      <BestSellers/>
      <BottomBanner/>
      {/* <Testimonials/> */}
      <NewsLetter/>
    </div>
  )
}

export default Home
