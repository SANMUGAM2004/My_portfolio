import React from 'react'
import Intro from './intro'
import About from './about'
import Experiences from './Experiences'
import Projects from './projects'
import Contact from './contact'
import Footer from './Footer'
import LeftSider from './LeftSider'


function Home() {
    return (
        <div >
            <div className='bg-primary px-40 sm:px-5'>
                <Intro />
                <About />
                <Experiences  />
                <Projects />
                <Contact />
                <Footer />
                <LeftSider />
            </div>
        </div>
    )
}


export default Home