import './Home.css'
import {Hero,MostPopular, GamingLibrary} from '../../sections/index'

import React from 'react'

const Home = () => {
  return (
    <>
        <Hero />
        <MostPopular />
        <GamingLibrary />
    </>
  )
}

export default Home