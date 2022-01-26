import React from 'react';

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import './secondary.css'

const Secondary = () => {
    let images = [
        {
            id: 1,
            source: img1
        },
        {
            id: 2,
            source: img2
        },
        {
            id: 3,
            source: img3
        },
        {
            id: 4,
            source: img4
        },
        {
            id: 5,
            source: img5
        },
        {
            id: 6,
            source: img6
        },
        {
            id: 7,
            source: img7
        },
        {
            id: 8,
            source: img8
        }
    ]

    return (
        <div className='sec-wrapper'>
            <div className='inner-wrapper'>
                {images.map((item, index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={item.source} alt='Sample image' />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Secondary;
