import React from 'react'
import Hero from '../../Components/Hero/Hero'
import AvailableHouses from '../../Components/AvailableHouses/AvailableHouses'
import Search from '../../Components/Search/Search'
import Lodges from '../../Components/Lodges/Lodges'
import FAQ from '../../Components/FAQ/FAQ'
import Testimonial from '../../Components/Testimonial/Testimonial'
import customerServiceImg from '../../assets/customer-service.png'
import './Home.css'


const Home = () => {
  return (
    <div>
      <Search />
      <Hero />
      <AvailableHouses />
      <Lodges />
      <FAQ isStandalone={false} />
      <Testimonial isStandalone={false}/>
        <img
          src={customerServiceImg}
          alt="Customer Service"
          className="customer-service-btn"
        />
    </div>
  )
}

export default Home
