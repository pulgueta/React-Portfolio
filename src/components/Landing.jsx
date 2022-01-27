import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import profile from '../assets/profile-pic.jpg'
import './landing.css'

const Landing = ({ text }) => {
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    })

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-out') {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 600)

        return () => clearInterval(timeout)
    }, [fadeProp])

    const navigate = useNavigate()

    const redirect = () => {
        navigate('/pictures')
    }

    return (
        <div className='landing'>
            <div className="wrapper">
                <div className="text">
                    <img className={fadeProp.fade} src={profile} alt='Profile Picture' />
                    <br />
                    <h1 className={fadeProp.fade}>{text}</h1>
                    <blockquote className={fadeProp.fade}>-Full-Stack Web Developer and Photographer-</blockquote>
                    <br /><br />
                    <p className={fadeProp.fade}>I am a Software Engineering student from Colombia. My main focus is the Full-Stack Web Development, but I also
                        learn about Cybersecurity, I study from both topics to become a hacker and a better web developer. I also practice
                        photography and videography. Click the button to check some of my photos.
                    </p>
                    <br />
                    <button id='text-btn' className={fadeProp.fade} onClick={redirect}>Click me!</button>
                </div>
            </div>
        </div>
    );

};

export default Landing;