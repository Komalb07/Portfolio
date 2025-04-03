import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`w-full fixed px-5 lg:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
            <a href="#top" className="flex items-center">
                <h1 className={`text-4xl font-extrabold ${isDarkMode ? "text-white" : "text-black"}`}>
                    Komal
                </h1>
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <li><a className='font-Ovo' href="#top"> Home</a></li>
                <li><a className='font-Ovo' href="#about"> About</a></li>
                <li><a className='font-Ovo' href="#projects"> Projects</a></li>
                <li><a className='font-Ovo' href="#publications"> Publications</a></li>
                <li><a className='font-Ovo' href="#hobbies"> Hobbies</a></li>
                <li><a className='font-Ovo' href="#contact"> Contact</a></li>
            </ul>
            <div className="flex items-center gap-4">
                <button onClick={() => setIsDarkMode((prev) => !prev)}>
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                </button>
                <button className="block md:hidden" onClick={toggleMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                </button>
            </div>

            {/* Mobile Menu */}
            <ul className={`fixed top-0 right-0 h-screen w-64 bg-rose-50 dark:bg-darkHover dark:text-white flex flex-col gap-6 py-10 px-5 transform transition-transform duration-300
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button className="absolute top-5 right-5" onClick={toggleMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-6' />
                </button>
                <li><a className='font-Ovo' onClick={toggleMenu} href="#top"> Home</a></li>
                <li><a className='font-Ovo' onClick={toggleMenu} href="#about"> About</a></li>
                <li><a className='font-Ovo' onClick={toggleMenu} href="#projects"> Projects</a></li>
                <li><a className='font-Ovo' onClick={toggleMenu} href="#publications"> Publications</a></li>
                <li><a className='font-Ovo' onClick={toggleMenu} href="#hobbies"> Hobbies</a></li>
                <li><a className='font-Ovo' onClick={toggleMenu} href="#contact"> Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
