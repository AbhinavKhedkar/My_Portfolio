"use client"
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';


const projectsData = [
    {
        id: 1,
        title: "Fresh Basket",
        subTitle: "CDAC Project",
        description: "Online vegetable store offers organic produce directly from local farms, cutting out middlemen to support farmers and provide premium quality to consumers. With separate logins for Admin, Customer, and Seller, our platform ensures a personalized experience. Powered by Spring-Boot, ReactJS, and MySQL, it boasts a robust backend, responsive UI, and secure data management. Farmers showcase and sell produce, customers choose fresh organic veggies, while admins manage operations and transactions for a thriving marketplace.",
        image: "/images/projects/1.png",
        tag: ["All", "Web", "Ecommerce", "React", "Spring"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        subTitle: "React Persnol Website",
        description: "Persnolized portfolio website made using Next.js",
        image: "/images/projects/2.png",
        tag: ["All", "Web", "React"],
        gitUrl: "/",
        previewUrl: "/"

    },
    {
        id: 3,
        title: "Book Store",
        subTitle: "CDAC Mini Project",
        description: "Online book store to sell books. User-Friendly Interface: Easy navigation with separate logins for Admin, Customer, ensuring a personalized experience. Technology Stack: MERN Stack (MongoDB, Express.Js, React.Js, Node.Js). Two Logins: Customers: Choose books to purchase. Admin: Ensure smooth operations and monitor transactions for a thriving online marketplace.",
        image: "/images/projects/3.png",
        tag: ["All", "Web", "Ecommerce", "React"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Free Chart Maker",
        subTitle: "React Website",
        description: "A small chart maker made using React and Chart.Js",
        image: "/images/projects/4.png",
        tag: ["All", "Web", "React"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Assignment",
        subTitle: "Single Webpage Assignment",
        description: "Single Webpage assignmnet made using HTML, CSS, JavaScript",
        image: "/images/projects/5.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/"
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
                <div className='flex flex-row justify-center items-center gap-2 py-6'>
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"All"}
                        isSelected={tag == "All"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"Web"}
                        isSelected={tag == "Web"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"Ecommerce"}
                        isSelected={tag == "Ecommerce"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"React"}
                        isSelected={tag == "React"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name={"Spring"}
                        isSelected={tag == "Spring"}
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
