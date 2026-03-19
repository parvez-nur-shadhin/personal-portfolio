import React from 'react';
import MyPicture from '../../assets/MyPicture.jpg'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

    return (
        <div className='max-w-[1000px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center mt-5 md:mt-20 p-4'>
            {/* Left */}
            <div className='text-center md:text-start mt-5 md:mt-0'>
                <h1 className='text-2xl md:text-5xl font-bold whitespace-pre-line'>
                    Parvez Nur Shadhin
                </h1>
                <h1 className='text-xl md:text-3xl font-normal md:font-semibold mt-2'>
                    <TypeAnimation 
                    sequence={
                        [
                            "Aspiring Software Engineer" ,2000
                        ]
                    }
                    >
                    </TypeAnimation>
                </h1>
                <p className='max-w-[600px] text-sm md:text-md mt-5 '>
                     I love building interactive web applications and exploring new technologies. 
                    Currently, I'm focused on improving my skills in React, Node.js, and modern web development practices. 
                    I enjoy turning ideas into functional and beautiful software!
                </p>
            </div>
            {/* right */}
            <div>
                <img className='w-[200px] md:w-[300px] border rounded-4xl shadow-2xl shadow-gray-700 transform transition duration-1000 hover:-translate-x-2 hover:-translate-y-2 hover:scale-120 hover:3xl cursor-pointer' src={MyPicture} alt="" />
            </div>
        </div>
    );
};

export default Banner;