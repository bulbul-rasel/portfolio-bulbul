import React from 'react';
import me from "../assest/about.jpg"
import Fade from 'react-reveal/Fade';
import './Style.css'
const About = () => {
    return (
        <div className='container' id='about'>
            <h2 className='text-center'>About <span className="text-primary">Me</span></h2>
            <div className="row">
                <div className="col-md-4 p-5">
                    <Fade left>
                        <img width={300} src={me} alt="" />
                    </Fade>
                </div>
                <div className="col-md-8 p-5">
                    <Fade right>
                        <p>Hello! I'm Bulbul Ahammed, a programmer with a good level of expertise in Front-End Web Development. . I'm a tech lover and like to write blogs about programming and web development. I'm interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.

                            I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest, confident, fun loving and caring as well.</p>
                        <div className="d-flex">
                            <button className='btn btn-outline-info p-2 rounded-pill me-5'><a className='text-decoration-none fw-bold' target="_blank" href="https://drive.google.com/file/d/1JeyQsVDOxuQsVHFJ0ZOYImj64RL4_G1m/view?usp=sharing">Download Resume</a></button>
                            <button className='btn btn-primary  ps-2 pe-2 rounded-pill me-5'><a className='text-decoration-none fw-bold ' href="https://github.com/bulbul-rasel">Github</a></button>
                        </div>
                    </Fade>
                </div>
            </div>

        </div>
    );
};

export default About;