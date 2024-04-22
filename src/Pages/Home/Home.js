import React from 'react'
import Banner from '../../Component/Banner/Banner'
import Overview from '../../Component/Overview/Overview'
import About from '../../Component/About/About'
import Highlights from '../../Component/Highlights/Highlights'
import Walkthrough from '../../Component/Walkthrough/Walkthrough'

const Home = () => {
    return (
        <div className='home'>
           <Banner/>
           <About/>
           <Overview/>
           <Highlights/>
           <Walkthrough/>
        </div>
    )
}

export default Home
