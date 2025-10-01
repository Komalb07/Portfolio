import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20 mx-auto'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}} >
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay:0.3}}  
      className='text-center mb-2 text-lg font-Ovo'>
        Who am I?</motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay:0.5}}  
      className='text-center text-5xl font-Ovo'>
        A peek into my world</motion.h2>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}  
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none '
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}} >
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.8}}  
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo text-center sm:text-justify px-2'>
                I graduated with a Master’s in Statistical Data Science from San Francisco State University, where I built a strong foundation in statistics, machine learning, and data analysis. 
                Recently, I interned at Suki AI, where I designed and fine-tuned ASR pipelines using Suki's ML Platform, worked with large-scale audio/text datasets, and improved Whisper’s performance for real-world clinical workflows. 
                Alongside industry experience, my research on volatility forecasting has been published in a peer-reviewed journal, giving me the chance to apply advanced statistical methods to century-spanning data.
                Beyond academics and work, I’ve enjoyed teaching as a Graduate Teaching Associate and Math Tutor, helping students navigate challenging concepts in calculus and statistics. 
                These experiences not only sharpened my technical skills but also strengthened my ability to explain complex ideas simply - something I value both inside and outside of data science.
                </p>
                <motion.ul
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay:1}}  
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li
                        whileHover={{scale: 1.05}} 
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                        key={index}>
                            {title === 'Projects' ? (
                            <a href="#projects">
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                             <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                            </a>
                            ) : (
                            <>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                            <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                            <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                            </>
                            )}
                        </motion.li>

                    ))}
                </motion.ul>
                <motion.h4
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay:1.3}}  
                className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I am familiar with</motion.h4>
                <motion.ul
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay:1.5}}  
                className='flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5 mx-auto lg:mx-0'>
                    {toolsData.map((tool, index)=>(
                        <motion.li
                        whileHover={{scale: 1.1}} 
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                        key={index}><Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
 