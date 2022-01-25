import React from 'react';

import profile from '../assets/profile-pic.jpg'
import './landing.css'

const Landing = () => {
    return (
        <div className='landing'>
            <div className="wrapper">
                <div className="text">
                    <img src={profile} alt='Profile Picture' width='300px'/>
                    <br />
                    <h1>Andrés Rodríguez</h1>
                    <blockquote>-Full-Stack Web Developer-</blockquote>
                    <br /><br />
                    <p>I'm a Software Engineering student from Colombia. I started learning Front-end development
                        with React. Later, I decided to become a Full-Stack developer mainly with React using the MERN Stack.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Landing;
