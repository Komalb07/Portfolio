import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                {/* Fixed Logo */}
                <h1
                    className={`text-4xl font-extrabold mb-4 ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                    Komal
                </h1>
            </div>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>
                    komalbhimireddy@gmail.com
                </span>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className={`${isDarkMode ? "text-white" : "text-black"}`}>Last updated on April 2, 2025</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/Komalb07">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/komal-bhimireddy">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
