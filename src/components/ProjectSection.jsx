"use client"
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import HomeCarousel from './HomeCarousal';


const projectsData = [
    {
        id: 1,
        title: "Fresh Basket",
        subTitle: "CDAC Project",
        description: "An online vegetable marketplace connecting consumers with fresh, organic produce sourced directly from local farmers. Featuring separate logins for farmers to showcase and sell their produce, customers to choose from a variety of organic vegetables, and admins to manage operations and transactions. Powered by Spring Boot for backend, React.JS for frontend, and MySQL for database management.",
        image: "/images/projects/1.png",
        tag: ["All", "Ecommerce"],
        gitUrl: "https://github.com/AbhinavKhedkar/FreshBasketRepo/tree/main",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        subTitle: "Persnol Portfolio Website",
        description: "A personalized portfolio website spotlighting my education, skills, hobbies, achievements, and project experiences, all crafted with Next.js and tailwind.CSS",
        image: "/images/projects/2.png",
        tag: ["All", "Website"],
        gitUrl: "https://github.com/AbhinavKhedkar/My_Portfolio",
        previewUrl: "https://my-portfolio-website-seven-amber.vercel.app/"

    },
    {
        id: 3,
        title: "Book Store",
        subTitle: "CDAC Mini Project",
        description: "An online bookstore facilitating seamless management for sellers with a single login, enabling comprehensive CRUD operations. Developed with MERN Stack (MongoDB, Express.js, React.js, Node.js) for robust functionality and smooth user experience.",
        image: "/images/projects/3.png",
        tag: ["All", "Ecommerce"],
        gitUrl: "https://github.com/AbhinavKhedkar/MERN_Stack_Book_Store",
        previewUrl: "https://mern-book-store-frontend-wine.vercel.app/"
    },
    {
        id: 4,
        title: "Chart Maker",
        subTitle: "Dynamic Chart Creation Tool",
        description: "A versatile web application designed to generate various types of charts, including pie charts, bar graphs, and more, based on user inputs. Experience effortless chart creation and visualization with Chartify.",
        image: "/images/projects/4.png",
        tag: ["All", "Tools"],
        gitUrl: "https://github.com/AbhinavKhedkar/ChartMaker",
        previewUrl: "https://chat-maker.vercel.app/"
    },
    {
        id: 5,
        title: "LimeLi8",
        subTitle: "LimeLi8 Events",
        description: "A captivating marketing website, meticulously designed to showcase their exemplary work and comprehensive event management services. Built with HTML, CSS, and JavaScript, experience seamless navigation and immersive content.",
        image: "/images/projects/5.png",
        tag: ["All", "Website"],
        gitUrl: "https://github.com/AbhinavKhedkar/LimeLi8",
        previewUrl: "https://lime-li8.vercel.app/"
    },
    {
        id: 6,
        title: "NFT Collection",
        subTitle: "Single Webpage Assignment",
        description: "Explore a dynamic single-page website demonstrating the mastery of HTML, CSS, and JavaScript. Witness the seamless integration of these languages in crafting an engaging and interactive web experience.",
        image: "/images/projects/6.png",
        tag: ["All", "Website"],
        gitUrl: "https://github.com/AbhinavKhedkar/NFTCollection",
        previewUrl: "/"
    },
    {
        id: 7,
        title: "FootForm",
        subTitle: "3D Website",
        description: "A captivating marketing website, meticulously designed to showcase their exemplary work and comprehensive event management services. Built with React.JS, tailwind.CSS, and Three.JS, experience seamless navigation and immersive content.",
        image: "/images/projects/7.png",
        tag: ["All", "3DWebsite"],
        gitUrl: "https://github.com/AbhinavKhedkar/FootForm",
        previewUrl: "https://foot-form-henna.vercel.app/"
    },
    {
        id: 8,
        title: "Lumiere",
        subTitle: "3D Website",
        description: "A captivating single page website, meticulously designed to showcase 3D features. Built with React.JS, tailwind.CSS, and WebGi, experience seamless navigation and immersive content.",
        image: "/images/projects/8.png",
        tag: ["All", "3DWebsite"],
        gitUrl: "https://github.com/AbhinavKhedkar/Lumiere",
        previewUrl: "https://lumiere-lake.vercel.app/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <section id='projects'>
            <div className='border border-l-transparent border-r-transparent border-b-transparent'>
                <h2 className='text-center text-4xl font-bold text-slate-200 mt-4 mb-8 md:mb-12'>
                    My Projects
                </h2>
                <HomeCarousel/>
                <div className='flex flex-row justify-center items-center gap-2 py-6'>
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"All"}
                        isSelected={tag == "All"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"Website"}
                        isSelected={tag == "Website"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"Ecommerce"}
                        isSelected={tag == "Ecommerce"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"3DWebsite"}
                        isSelected={tag == "3DWebsite"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"Tools"}
                        isSelected={tag == "Tools"}
                    />
                </div>
                <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                    {filteredProjects.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                subTitle={project.subTitle}
                                description={project.description}
                                imgUrl={project.image}
                                tags={project}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ProjectSection;
