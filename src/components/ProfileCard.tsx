import { motion } from "framer-motion";
import React from 'react';

const ProfileCard = () => {
  return (
    <motion.div
      className="profile-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src="./img/1.png" alt="Profile" />
          <h2>Bellatrisa Baggins</h2>
      <p>Frontent Developer & Creative Designer</p>
      <p>Work experience: 2 years</p>
      <motion.button whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
        Follow
      </motion.button>
    </motion.div>
  );
};

export default ProfileCard;
