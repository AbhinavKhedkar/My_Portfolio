"use client"
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='List-disk pl-2'>
                <li>• Java</li>
                <li>• HTML</li>
                <li>• CSS</li>
                <li>• JavaScript</li>
                <li>• React.Js</li>
                <li>• Tailwind CSS</li>
                <li>• Spring Boot</li>
                <li>• Git</li>
                <li>• Next.Js</li>
                <li>• .NET</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='List-disk pl-2'>
                <li>• CDAC ACTS, Pune</li>
                <li>• NBN Sinhgad School of Engineering, Pune</li>
                <li>• Army Public School, Pune</li>
                <li>• Army Public School, Pune</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='List-disk pl-2'>
                <li>• Wooshin Engineering Pvt. Ltd., Pune</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='List-disk pl-2'>
                <li>• Post Graduate Diploma in Advanced Computing</li>
            </ul>
        )
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content: (
            <ul className='List-disk pl-2'>
                <li>• History</li>
                <li>• Collecting coins and old artefact</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handelTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id='about' className='border border-l-transparent border-r-transparent lg:py-16'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 relative'>
                <Image src="/images/pictures/about-image.jpg" className='rounded-xl' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-slate-200 mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg text-slate-600'>
                        Hello, I&apos;m Abhinav Khedkar, a graduate from CDAC ACTS, Pune with a PG-DAC certification. My journey into the realm of technology has been incredibly exciting and fulfilling, driven by my passion for crafting innovative solutions and my unwavering dedication to excellence.

                        During my time at CDAC, I&apos;ve honed my skills in various programming languages, including Java, JavaScript, and C#, along with mastering MySQL for efficient database management. Additionally, I&apos;ve delved into full-stack development, gaining proficiency in technologies like React.js, Spring Boot, JDBC, and Express, which have equipped me to build robust and dynamic applications.

                        I thrive in collaborative environments, believing that diverse perspectives foster innovation. I&apos;m eager to contribute my skills to address modern application development challenges, whether it&apos;s architecting scalable systems, optimizing database performance, or designing intuitive user interfaces. With my enthusiasm and precision, I&apos;m ready to roll up my sleeves and make meaningful contributions to your projects. Let&apos;s join forces and bring fresh ideas to life, propelling your endeavors to new heights of success.
                    </p>
                </div>
                <div className='z-10'>
                    <div className='flex flex-col md:flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handelTabChange("skills")} active={tab == "skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handelTabChange("education")} active={tab == "education"}>{" "}Education{" "}</TabButton>
                        <TabButton selectTab={() => handelTabChange("experience")} active={tab == "experience"}>{" "}Experience{" "}</TabButton>
                        <TabButton selectTab={() => handelTabChange("certification")} active={tab == "certification"}>{" "}Certification{" "}</TabButton>
                        <TabButton selectTab={() => handelTabChange("hobbies")} active={tab == "hobbies"}>{" "}Hobbies{" "}</TabButton>
                    </div>
                    <div className='mt-8 text-slate-600'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
                <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-secondary-500 to-transparent rounded-full h-80 w-80 z-0 sm:absolute bottom-0 right-0'>
                    <Image src="/images/extra_gif/butterfly3.gif" width={500} height={500} />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
