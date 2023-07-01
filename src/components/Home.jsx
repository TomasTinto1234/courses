import React from 'react'
// import AboutMe from './AboutMe'
import AboutMe2 from './AboutMe2'
// import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar'
// import Portfolio from './Portfolio'
import React2 from './React'
import Habilities from './Habilities'

const Home = () => {
  return (
    <div>
        <NavBar/>
         {/* <AboutMe/> */}
         <AboutMe2/>
         <Habilities/>
         <React2/>

       {/* <Portfolio/>
        <Contact/> */}
        <Footer/>
    </div>
  )
}

export default Home