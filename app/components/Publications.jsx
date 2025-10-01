import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const publicationsList = [
  {
    title: "Forecasting Gold Returns Volatility Over 1258–2023: The Role of Moments",
    venue: "Applied Stochastic Models in Business and Industry",
    status: "Published",
    description: "In this work, we looked at over 766 years of gold return data to understand how factors like leverage, tail risks, skewness, and kurtosis influence volatility. Using Bayesian time-varying quantile regressions, we found that these moments can predict short- to medium-term volatility more accurately than traditional models. The findings, confirmed with higher-frequency data, highlight useful insights for investors and policymakers navigating uncertainty.",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/asmb.70042"
  }
   
  ,
  {
    title: "Binge Drinking and Mental Distress Across Racial/Ethnic Groups",
    venue: "Ongoing Study — BRFSS Data Analysis",
    status: "Work in Progress",
    description: "This study investigates how frequent binge drinking relates to frequent mental distress (FMD) across racial and ethnic groups in the U.S., using BRFSS survey data. By controlling for demographic and socioeconomic factors, and employing logistic regression with interaction effects and complex survey weighting, the research aims to uncover disparities in alcohol-related mental health outcomes.",
    link: ""
  }  
];

const Publications = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration: 1}}  
      id='publications' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay:0.3}}  
        className={`text-center mb-2 text-lg font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        What questions have I pursued?</motion.h4>

      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay:0.5}}  
        className={`text-center text-5xl font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        A journey through my research</motion.h2>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.9}}  
        className='flex flex-col md:flex-row justify-center gap-6 my-10'>

          {publicationsList.map(({title, venue, status, description, link}, index) => (

          <motion.div
            whileHover={{scale:1.05}} 
            key={index} 
            className={`border rounded-lg px-8 py-12 max-w-md cursor-pointer hover:-translate-y-1 duration-500 
              ${isDarkMode ? 'border-white hover:bg-darkHover hover:shadow-white text-white' : 'border-gray-400 hover:bg-lightHover hover:shadow-black text-gray-800'}`}>

            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className={`text-sm italic mb-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{venue}</p>
            <p className={`text-sm italic mb-4 ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>{status}</p>
            <p className={`text-sm leading-5 ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>{description}</p>
            {link && (
              <a href={link} target='_blank' className={`flex items-center gap-2 text-sm mt-5 ${isDarkMode ? 'text-lime-300' : 'text-blue-600'} hover:underline`}>
                See Publication Details <Image alt='' src={assets.right_arrow} className='w-4' />
              </a>
            )}
          </motion.div>
        ))}

      </motion.div>
    </motion.div>
  )
}

export default Publications