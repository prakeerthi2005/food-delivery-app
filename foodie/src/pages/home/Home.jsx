import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialCategories from './SpecialCategories'
import Testimonials from './Testimonials'
import OurServices from './OurServices'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialCategories/>
      <Testimonials/>
      <OurServices/>
      
    </div>
  )
}

export default Home