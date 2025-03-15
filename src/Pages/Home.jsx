import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Blogs from '../Components/Blogs'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Cards/>
      <Blogs/>
    </div>
  )
}

export default Home