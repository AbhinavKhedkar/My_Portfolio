"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const PDF_FILE_URL = 'http://localhost:3000/Abhinav_Khedkar_Resume.pdf'

const HeroSection = () => {
    const downloadFileAtURRL = (url) => {
        fetch(url).then(response => response.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split('/').pop();
            const aTag = document.createElement('a');
            aTag.href = blobURL;
            aTag.setAttribute('download', fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        });
    };
    return (
        <section id='hero' className="bg-[url('/images/background/Hero.gif')] bg-center px-12">
            <div className="lg:py-16 border border-l-transparent border-r-transparent left-0">
                <div className='grid grid-col-1 sm:grid-cols-12 relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-t from-secondary-400 to-tertiary-600'>
                                Hello, I'm{" "}
                            </span>
                            <br></br>
                            <TypeAnimation className='text-slate-200'
                                sequence={[
                                    'Abhinav',
                                    1000,
                                    'Full Stack Developer',
                                    1000,
                                    'Backend Developer',
                                    1000,
                                    'Frontend Developer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                            As a CDAC graduate, I bring a strong foundation in programming languages such as Java, JavaScript, and C#, coupled with expertise in MySQL for database management. My journey into full-stack development has equipped me with proficiency in React.js, Spring Boot, JDBC, and Express. I am a versatile developer ready to contribute to dynamic teams and drive meaningful solutions for modern application development challenges. Let's collaborate to bring innovation and success to your projects.
                        </p>
                        <div>
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 hover:bg-slate-200 text-slate-200 hover:text-slate-600'>
                                Hire Me
                            </button>
                            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 bg-transparent hover:bg-slate-800 text-slate-200 hover:text-slate-600 mt-3' onClick={() => (downloadFileAtURRL(PDF_FILE_URL))}>
                                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                    Download CV
                                </span>
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='col-span-4 place-self-center mt-4 lg:mt-0'>
                        <div className='rounded-full border-2 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex justify-center items-center'>
                            <Image
                                src="/images/pictures/hero-image.png"
                                alt="hero image"
                                className='block rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]'
                                width={300}
                                height={300}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}

export default HeroSection;
