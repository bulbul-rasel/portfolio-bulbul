import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';

import Header from './Header';
import Liberary from './Liberary';
import Particle from './Particle';
import Project from './Project';
import Skill from './Skill';

const Home = () => {
    return (
        <>
            <Particle></Particle>
            <div className='text-white'>


                <Header></Header>
                <Banner />
                <About></About>
                <Liberary />
                <Skill></Skill>
                <Project />
                <Contact />
                <Footer />

            </div>
        </>


    );
};

export default Home;