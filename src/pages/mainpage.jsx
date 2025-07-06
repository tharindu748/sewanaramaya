import React from 'react';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';
import img1 from '../asserts/p1.jpg';
import img2 from '../asserts/p2.jpg';
import img3 from '../asserts/p3.jpg';
import img4 from '../asserts/p4.jpg';
import img5 from '../asserts/p5.jpg';
import { FaCalendarAlt, FaArrowRight, FaBookOpen, FaUsers, FaLaptopCode } from 'react-icons/fa';
import './siko-style.css';

function MainPage() {
  const blogPosts = [
    {
      id: 1,
      title: "සයිකෝගේ සෙරිනිටි සීන් එක",
      image: img1,
      excerpt: "ගුනේ පටන් අරන් සෙන්සර් සදූ දක්වා තනීෂිරපයි නවතම වාදයක්!",
      category: "සිකෝ වදන්",
      icon: <FaBookOpen />,
      date: "2025 ජූලි 6"
    },
    {
      id: 2,
      title: "ගුනේගේ ගැම්ම කතාව",
      image: img2,
      excerpt: "සෙරිනිටි කීව්වම ගුනේට දැනෙන්නෙ මනෝ විකෘතිවල විකල්ප ධාරාවක්!",
      category: "තණි කතා",
      icon: <FaUsers />,
      date: "2025 ජූලි 1"
    },
    {
      id: 3,
      title: "තනීෂිරපයියගේ තාක්ෂණාත්මක තානායම",
      image: img4,
      excerpt: "බ්ලූටූත් සදූ එකට sensor එකක් connect කරා කියලා කිව්වොත් මේක තමයි!",
      category: "සදු කටු",
      icon: <FaLaptopCode />,
      date: "2025 ජූනි 28"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>සෙරිනිටි ගමේ සිකෝ පැකේජය</h1>
            <p>සදූවෙ සිනහව, ගුනේගෙ ගැම්ම, තනීෂිරපයියගෙ අරගලය – එකම තැනකට!</p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn-primary">ගුනේට Join වෙන්න</Link>
              <Link to="/explore" className="btn-outline">අරගලය බලන්න</Link>
            </div>
          </div>
          <div className="hero-pattern"></div>
        </section>

        {/* Featured Posts */}
        <section className="featured-section">
          <div className="section-header">
            <h2>සදූ Approved ලිපි</h2>
            <p>සයිකෝ, ගුනේ, තනීෂිරපයියා සහ sensor saduගෙ sensor එකේ ලියුම්</p>
          </div>

          <div className="posts-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-image" style={{ backgroundImage: `url(${post.image})` }}>
                  <span className="post-category">{post.icon} {post.category}</span>
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-footer">
                    <span className="post-date">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      තව sensor කරන්න <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="section-header">
            <h2>සිකෝවන්ගෙ හඬ</h2>
            <p>ගුනේගෙ ආත්ම සාක්ෂිය සහ සදූගෙ පසුතැවීම්</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"තනීෂිරපයිය කියනවා – මේ site එක බලලා එයාට ඩෙංගුත් සනීප වුනා!"</p>
              </div>
              <div className="testimonial-author">
                <img src={img3} alt="Author" />
                <div>
                  <h4>ගුනේ</h4>
                  <span>සදූ සමිතිය</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"සයිකෝව තාමත් කියනව – ‘කියවන්න ගියෙත් නැහැ, දැන් නවත්තන්න බැහැ!’"</p>
              </div>
              <div className="testimonial-author">
                <img src={img5} alt="Author" />
                <div>
                  <h4>සදූ</h4>
                  <span>තනිකඩ ගැහැනියක්</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Sensor වෙන්න ඔයාත් කැමතිද?</h2>
            <p>සෙරිනිටි ගමේ ඩිජිටල් පන්සලට දැන්ම ඇවිල්ලා බලන්න!</p>
            <Link to="/signup" className="btn-primary">සිකෝ වෙන්න</Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainPage;
