import React from 'react';

import profile from '../assets/profile-pic.jpg'
import './landing.css'

const Landing = () => {
    return (
        <div className='landing'>
            <div className="wrapper">
                <div className="text">
                    <img src={profile} alt='Profile Picture' width='320px'/>
                    <br />
                    <h1>Andrés Rodríguez</h1>
                    <blockquote>-Full-Stack Web Developer-</blockquote>
                    <br /><br />
                    <p>I am a Software Engineering student from Colombia. My main focus is the Full-Stack Web Development, but I am
                        also interested in Cybersecurity, learning everyday from both topics to become a 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Landing;
