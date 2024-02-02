import React from 'react';
import Image from 'next/image';

const navLinks = [
    { title: "About", path: "#about" },
]

const Footer = () => {
    return (
        <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent bg-slate-200 bottom-0 left-0 right-0'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <span>
                        <Image src="/logos/logo.png" className='rounded-xl' width={100} height={100} />
                </span>
                <div className='w-20 h-20 '>
                    <Image src="/images/extra_gif/butterfly1.gif" width={500} height={500} />
                </div>
                <p className='text-black hover:text-secondary-600'>© All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
