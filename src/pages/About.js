// About.js
import { motion } from 'framer-motion';
import templeImage from '../assets/sewane.jpg';
import monkImage from '../assets/sewane.jpg'; // Add your image
import './About.css';

function About() {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Background */}
      <div className="particle-bg"></div>
      
      {/* Glass Morphism Card */}
      <motion.div 
        className="about-card"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="header-section">
          <motion.h1 
            className="main-title"
            whileHover={{ scale: 1.02 }}
          >
            අපගේ කතාව
            <div className="title-underline"></div>
          </motion.h1>
          
          <motion.img 
            src={templeImage} 
            alt="Sewanaramaya Temple" 
            className="hero-image"
            whileHover={{ scale: 1.01 }}
          />
        </div>

        <div className="content-grid">
          <motion.div 
            className="history-section"
            whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <h2 className="section-title">ඉතිහාසය</h2>
            <p className="section-text">
              සේවනාරාමය විහාරස්ථානය 19XX වර්ෂයේදී පිහිටුවන ලද්දකි. 
              අපගේ මහා සංඝයා වහන්සේලාගේ නිර්මාණශීලී දායකත්වයෙන්...
            </p>
          </motion.div>

          <motion.div 
            className="mission-section"
            whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <h2 className="section-title">අපගේ අරමුණ</h2>
            <p className="section-text">
              බුදු දහමේ මූලික ධර්ම ජනතාවට හඳුන්වාදීම...
            </p>
          </motion.div>
        </div>

        <div className="monk-profile">
          <motion.div 
            className="monk-image-container"
            whileHover={{ scale: 1.03 }}
          >
            <img src={monkImage} alt="Chief Monk" className="monk-image" />
            <div className="glow-effect"></div>
          </motion.div>
          <div className="monk-details">
            <h3 className="monk-name">පූජ්‍ය කිරිබත්ගොඩ ඤාණවීර හිමි</h3>
            <p className="monk-title">මහානායක හිමි</p>
            <p className="monk-bio">
              25 වසරකට අධික කාලයක් ධර්ම දේශනා...
            </p>
          </div>
        </div>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          අප හා සම්බන්ධ වන්න
          <div className="button-arrow">→</div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default About;