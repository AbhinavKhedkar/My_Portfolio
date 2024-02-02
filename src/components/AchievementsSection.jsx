"use client"
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => { return import("react-animated-numbers") }, { ssr: false })

const achievementsList = [
    {
        metrics: "Problems Solved",
        value: "150",
        postfix: "+"
    },
    {
        metrics: "Prjects Completed",
        value: "4",
    },
    {
        metrics: "Months/Years Experience",
        value: "6",
        postfix: "M"
    },
]

const AchievementsSection = () => {
    return (
        <div className='border border-l-transparent border-r-transparent border-t-transparent py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='sm:border-[#33353F] sm:border rounded-md bg-[#181818] py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
                {
                    achievementsList.map((achievement, index) => {
                        return (
                            <div
                                key={index}
                                className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'
                            >
                                <h2 className='text-slate-200 text-4xl font-bold flex flex-row'>
                                    {achievement.prefix}
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        locate="en-US"
                                        className='text-slate-200 text-4xl font-bold'
                                        configs={(_, index) => {
                                            return {
                                                mass: 1,
                                                friction: 100,
                                                tension: 140 * (index + 1),
                                            };
                                        }}
                                    />
                                    {achievement.postfix}
                                </h2>
                                <p className='text-[#ADB7BE] text-base'>{achievement.metrics}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default AchievementsSection;
