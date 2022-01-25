import React from 'react';

import profile from '../assets/profile-pic.jpg'
import './landing.css'

const Landing = () => {
    return (
        <div className='landing'>
            <div className="wrapper">
                <div className="text">
                    <img src={profile} alt='Profile Picture' />
                    <br />
                    <h1>Andrés Rodríguez</h1>
                    <blockquote>-Full-Stack Web Developer and Photographer-</blockquote>
                    <br /><br />
                    <p>I am a Software Engineering student from Colombia. My main focus is the Full-Stack Web Development, but I also 
                        learn about Cybersecurity, I study from both topics to become a hacker and a better web developer. I also practice
                        photography and videography. Down below you can find my gear and some pictures I have done.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Landing;
