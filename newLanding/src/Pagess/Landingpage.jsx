// import React from 'react'
import Cards from '../components/Cards'
// import CreateNewCard from '../components/CreateNewCard'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const Landingpage = () => {
  return (
      <div className='relative'>
      <Nav/>
      <Hero/>
      <div className='flex flex-wrap justify-evenly p-10'
      id='documents'
      >
       {/* <div className='fix'>
       <CreateNewCard/> 
        </div>  */}
      <Cards/>
      </div>
      
    </div>
  )
}

export default Landingpage
