import React from 'react'
import Banner from '../../Component/Banner/Banner'
import Overview from '../../Component/Overview/Overview'
import About from '../../Component/About/About'
import Highlights from '../../Component/Highlights/Highlights'
import Walkthrough from '../../Component/Walkthrough/Walkthrough'
import Enquery from '../../Component/Enquery/Enquery'
import HomePlan from '../../Component/HomePlan/HomePlan'

const Home = () => {
    return (
        <div className='home'>
           <Banner/>
           <About/>
           <Overview/>
           <Highlights/>
           <Walkthrough/>
           <HomePlan/>
           <Enquery/>
        </div>
    )
}

export default Home
