import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';

import Header from './Header';
import Project from './Project';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='bg-light'>


            <Header></Header>
            <Banner />
            <About></About>
            <Skill></Skill>
            <Project />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;