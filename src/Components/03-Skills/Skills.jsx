import React from 'react';
import Html5 from '../../assets/html5.png'
import Css from '../../assets/CSS3.png'
import TailwindCSS from '../../assets/TailwindCSS.png'
import Javascript from '../../assets/Javascript.png'
import ReactIMG from '../../assets/React.png'
import Git from '../../assets/Git.png'
import GitHub from '../../assets/Github.png'
import Netlify from '../../assets/Netlify.png'
import NodeJS from '../../assets/NodeJS.png'
import Axios from '../../assets/Axios.png'

const Skills = () => {
    return (
        <div id='skills' className='max-w-277.5 mx-auto mt-15'>
            <h1 className='text-center text-4xl text-yellow-500 font-bold'>Technical Skills</h1>
                {/* Skills Container */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
                {/* Front-End Skills */}
                <div className='border border-gray-500 shadow-2xl rounded-lg p-4'>
                    <h1 className='text-center text-2xl text-cyan-500 font-bold'>FRONTEND</h1>
                <div className='grid grid-cols-2 gap-3 mt-3'>  
                    {/* skill-1 */}
                    <div className='bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={Html5} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>HTML5</h1>
                        </div>
                    </div>
                    {/* skill-2 */}
                    <div className='bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={Css} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>CSS</h1>
                        </div>
                    </div>
                    {/* skill-3 */}
                    <div className='bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={TailwindCSS} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>TAILWIND CSS</h1>
                        </div>
                    </div>
                    {/* skill-4 */}
                    <div className='bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={Javascript} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>JAVASCRIPT</h1>
                        </div>
                    </div>
                    {/* skill-5 */}
                    <div className='col-span-2 bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={ReactIMG} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>REACT</h1>
                        </div>
                    </div>
                </div>
                </div>
                {/* Tools */}
                <div className='border border-gray-500 shadow-2xl rounded-lg p-4'>
                    <h1 className='text-center text-2xl text-cyan-500 font-bold'>TOOLS</h1>
                <div className='grid grid-cols-2 gap-3 mt-3'>  
                    {/* skill-1 */}
                    <div className='bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={Git} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>GIT</h1>
                        </div>
                    </div>
                    {/* skill-2 */}
                    <div className='bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={GitHub} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>GITHUB</h1>
                        </div>
                    </div>
                    {/* skill-3 */}
                    <div className='bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={NodeJS} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>NODE.JS</h1>
                        </div>
                    </div>
                    {/* skill-4 */}
                    <div className='bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={Netlify} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>NETLIFY</h1>
                        </div>
                    </div>
                    {/* skill-5 */}
                    <div className='col-span-2 bg-gray-500/15 p-3 rounded-lg cursor-pointer transform hover:scale-105 duration-300'>
                        <div>
                            <img className='w-10 h-10 mx-auto' src={Axios} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-lg'>AXIOS HTTP</h1>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;