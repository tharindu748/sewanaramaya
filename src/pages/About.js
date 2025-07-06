import React from 'react';
import { motion } from 'framer-motion';
import villageImage from '../asserts/sewane.jpg';
import founderImage from '../asserts/p1.jpg';
import Navbar from '../Component/Navbar';
import { FaLeaf, FaMedal, FaHandsHelping, FaPhoneAlt } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <>
      <Navbar />
      <motion.div
        className="about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Background */}
        <div className="bg-pattern"></div>
        <div className="bg-gradient"></div>

        {/* Main Content */}
        <motion.div
          className="about-container"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {/* Hero Section */}
          <section className="hero-section">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h1 
                className="hero-title"
                whileHover={{ scale: 1.02 }}
              >
                සෙවනාරාමය ගැන
                <motion.div 
                  className="title-underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </motion.h1>
              <p className="hero-subtitle">සන්සුන් ජීවිතයේ සාර්ථක ගමන</p>
            </motion.div>

            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img 
                src={villageImage} 
                alt="සෙවනාරාමය" 
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </motion.div>
          </section>

          {/* Values Grid */}
          <section className="values-section">
            <motion.div 
              className="value-card"
              whileHover={{ y: -5 }}
            >
              <div className="value-icon">
                <FaLeaf />
              </div>
              <h3>ස්වාභාවික පරිසරය</h3>
              <p>සීතල වාතාවරණයක් සහ නිර්මල පරිසරයක් ඔබට අපි සපයමු</p>
            </motion.div>

            <motion.div 
              className="value-card"
              whileHover={{ y: -5 }}
            >
              <div className="value-icon">
                <FaMedal />
              </div>
              <h3>ගුණාත්මක සේවාව</h3>
              <p>උසස් තත්ත්වයේ සහ සුවපහසු සේවාවන් අපගේ ප්‍රතිඥාවයි</p>
            </motion.div>

            <motion.div 
              className="value-card"
              whileHover={{ y: -5 }}
            >
              <div className="value-icon">
                <FaHandsHelping />
              </div>
              <h3>සාම්ප්‍රදායික අත්දැකීම</h3>
              <p>සිංහල සංස්කෘතිය සහ සාම්ප්‍රදායික අත්දැකීම්</p>
            </motion.div>
          </section>

          {/* History Section */}
          <section className="history-section">
            <motion.div 
              className="history-content"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>අපගේ ඉතිහාසය</h2>
              <p>
                සේවනාරාමය සින්හල ජීවිත රටා අත්විඳිමින් නිවන් සෙරිනටිව බහුදින නිවාඩුවක් ලබාදීමට
                සැලසුම් කර ඇති නිවන් සෙරිනටි ගමකි. 20XX වසරේ ආරම්භ වූ මේ ව්‍යාපෘතිය,
                සන්සුන් පරිසරයක නිවන් සෙරිනටිව ජීවිතය හැඟවීමට අපේක්ෂා කරයි.
              </p>
            </motion.div>
            <div className="history-image"></div>
          </section>

          {/* Founder Section */}
          <section className="founder-section">
            <motion.div
              className="founder-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={founderImage} alt="නිෂාන් පෙරේරා" className="founder-image" />
              <div className="founder-badge">ස්ථාපක</div>
            </motion.div>

            <motion.div 
              className="founder-info"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>නිෂාන් පෙරේරා</h2>
              <h3>ප්‍රධාන සංවිධායක</h3>
              <p>
                නිෂාන් මහතා සන්සුන් ජීවිත විලාසිතාවන් පිළිබඳව විශේෂ දැක්මක්
                සහිතව මෙම ගමන් මග පටන් ගත්තේය. ඔහුගේ පරමාර්ථය වන්නේ නගර ජීවිතයේ
                ආතතියෙන් මිදී, සරළ පරිසරයකින් ආරක්ෂා වූ ජීවිත අත්දැකීම ලබා දීමයි.
              </p>
            </motion.div>
          </section>

          {/* Mission Section */}
          <section className="mission-section">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >අපගේ දැක්ම</motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              සීතල වාතාවරණයක්, ගම්මාන සන්සුන් භාවය සහ සෞඛ්‍ය සම්බන්ධ සේවාවන්
              මුළුල්ලේ සන්සුන් ජීවිත අත්දැකීම් ලබා දීමයි.
            </motion.p>
          </section>

          {/* CTA Section */}
          <motion.section 
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2>අප සමඟ සම්බන්ධ වන්න</h2>
            <p>තවත් තොරතුරු සඳහා අපගේ කණ්ඩායම සමඟ සම්බන්ධ වන්න</p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt /> අමතන්න
            </motion.button>
          </motion.section>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;