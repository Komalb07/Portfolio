import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { assets } from '@/assets/assets'; // Add your hobby images to assets

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

// Sample hobbies list with image references
const hobbiesList = [
  { name: 'Kayaking', image: assets.kayaking },
  { name: 'Travelling', image: assets.travelling },
  { name: 'Badminton', image: assets.badminton },
  { name: 'Music', image: assets.songs },
  { name: 'Photography', image: assets.photography }
];

const Hobbies = ({ isDarkMode }) => {
  return (
    <motion.div
      id="hobbies"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Headings */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`text-center mb-2 text-lg font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
      >
        How do I recharge?
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`text-center text-5xl font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
      >
        The little joys that shape who I am
      </motion.h2>

      {/* Hobby Image Tiles */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {hobbiesList.map(({ name, image }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[0.5px] border-gray-400 dark:border-white shadow-md">
              <Image src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <p className={`text-sm font-Ovo ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hobbies;
