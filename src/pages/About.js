import React from 'react';
import { motion } from 'framer-motion';
import coupleImage from '../asserts/romantic-couple.jpg';
import founderImage from '../asserts/p1.jpg';
import Navbar from '../Component/Navbar';
import { FaHeart, FaFire, FaWineGlassAlt, FaSpa } from 'react-icons/fa';
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
        {/* Sensual Background Elements */}
        <div className="bg-pattern" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/soft-pattern.png")' }}></div>
        <div className="bg-gradient" style={{ background: 'linear-gradient(135deg, rgba(107, 35, 54, 0.8), rgba(44, 19, 56, 0.9))' }}></div>

        {/* Main Content */}
        <motion.div
          className="about-container"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {/* Romantic Hero Section */}
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
                රතිමය සෙවනාරාමය
                <motion.div 
                  className="title-underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ background: '#e83e8c' }}
                />
              </motion.h1>
              <p className="hero-subtitle">ප්‍රේමයේ සහ ආශ්කතාවේ උණුසුම් ගමන</p>
            </motion.div>

            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img 
                src={coupleImage} 
                alt="ප්‍රේමණීය යුවළ" 
                className="hero-image"
              />
              <div className="image-overlay" style={{ background: 'linear-gradient(to top, rgba(107, 35, 54, 0.7), rgba(44, 19, 56, 0.5))' }}></div>
            </motion.div>
          </section>

          {/* Sensual Values Grid */}
          <section className="values-section">
            <motion.div 
              className="value-card"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(232, 62, 140, 0.3)' }}
              style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
            >
              <div className="value-icon" style={{ color: '#e83e8c' }}>
                <FaHeart />
              </div>
              <h3>ප්‍රේමණීය රාත්‍රී</h3>
              <p>උණුසුම් ප්‍රේමණීය රාත්‍රී සඳහා විශේෂිත සැලසුම් කළ පරිසරය</p>
            </motion.div>

            <motion.div 
              className="value-card"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(255, 107, 0, 0.3)' }}
              style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
            >
              <div className="value-icon" style={{ color: '#ff6b00' }}>
                <FaFire />
              </div>
              <h3>උණුසුම් අත්දැකීම්</h3>
              <p>ඔබගේ ආශ්කතාවන් සැබෑ කිරීම සඳහා විශේෂ අවස්ථා</p>
            </motion.div>

            <motion.div 
              className="value-card"
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(156, 39, 176, 0.3)' }}
              style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
            >
              <div className="value-icon" style={{ color: '#9c27b0' }}>
                <FaSpa />
              </div>
              <h3>ආශ්කතා මාලිගා</h3>
              <p>යුවලන් සඳහා විශේෂිත ස්පා සහ සුවපහසුකම්</p>
            </motion.div>
          </section>

          {/* Romantic History Section */}
          <section className="history-section">
            <motion.div 
              className="history-content"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>අපගේ රහස් සිහිල් ගමන</h2>
              <p>
      සදු මහතා ප්‍රේම සම්බන්ධතා සහ රොමාන්ටික අත්දැකීම් පිළිබඳව 
  විශේෂ දැනුමක් සහිතව මෙම ගමන් මග පටන් ගත්තේය. ඔහුගේ පරමාර්ථය 
  වන්නේ යුවළන්ගේ ආශ්කතාවන් සැබෑ කිරීම සඳහා පරිපූර්ණ පරිසරයක් 
  නිර්මාණය කිරීමයි.
            </p>
            </motion.div>
            <div className="history-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")' }}></div>
          </section>

          {/* Founder Section with Romantic Twist */}
          <section className="founder-section">
            <motion.div
              className="founder-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={founderImage} alt="නිෂාන් පෙරේරා" className="founder-image" />
              <div className="founder-badge" style={{ background: '#e83e8c' }}>ප්‍රේම විශාරද</div>
            </motion.div>

            <motion.div 
              className="founder-info"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2> සදු මහතා</h2>
              <h3>ප්‍රේම සංවිධායක</h3>
              <p>
  ඔබ තනිවම පැමිණෙන අයෙකු වනවානම්, සෙවන් විලේජ් තුළ ඔබට 
  නිවන් සන්සුන් සහ නව මිතුරන් සෙවීම සඳහා සුවපහසු අවකාශ 
  සලස ඇත. තනි ගමන්කාරයන් සඳහා අපගේ "සයිකෝ" සහ "ගුනේ" 
  ඔබට හොඳම මාර්ගෝපදේශය ලබා දෙනු ඇත.
              </p>
            </motion.div>
          </section>

          {/* Sensual Mission Section */}
          <section className="mission-section" style={{ background: 'rgba(232, 62, 140, 0.1)' }}>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >අපගේ රහස් දැක්ම</motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              ඔබගේ ආශ්කතාත්මක අවශ්‍යතා සහ ප්‍රේමණීය අත්දැකීම් සඳහා 
              සංවේදනාත්මක සහ රහසිගත පරිසරයක් නිර්මාණය කිරීම අපගේ අරමුණයි.
            </motion.p>
          </section>

          {/* Romantic CTA Section */}
          <motion.section 
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ background: 'linear-gradient(135deg, #e83e8c, #9c27b0)' }}
          >
            <h2>ඔබගේ රොමාන්ටික ගමන ආරම්භ කරන්න</h2>
            <p>තවත් තොරතුරු සහ විශේෂ පිරිනැමීම් සඳහා අපව අමතන්න</p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              style={{ background: '#fff', color: '#e83e8c' }}
            >
              <FaWineGlassAlt style={{ marginRight: '10px' }} /> රහස් සාකච්ඡාවක් ආරම්භ කරන්න
            </motion.button>
          </motion.section>
        </motion.div>
      </motion.div>
    </>
  );
}

export default About;