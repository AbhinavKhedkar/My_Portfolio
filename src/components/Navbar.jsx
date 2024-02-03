"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
    { title: "Home", path: "#hero" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contacts", path: "#contacts" }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-slate-200 bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='hover:bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 rounded-full'>
                <Image src="/logos/logo.png" className='rounded-xl' width={100} height={100} />
                </Link>
                <div className='w-20 h-20 '>
                    <Image src="/images/extra_gif/butterfly2.gif" width={500} height={500} />
                </div>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-black text-black hover:text-secondary-600 hover:border-secondary-600'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-black text-black hover:text-secondary-600 hover:border-secondary-600'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
}

export default Navbar;
