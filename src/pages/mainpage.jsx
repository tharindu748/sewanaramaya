import React from 'react';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';
import img1 from '../asserts/p1.jpg';
import img2 from '../asserts/p2.jpg';
import img3 from '../asserts/p3.jpg';
import img4 from '../asserts/p4.jpg';
import img5 from '../asserts/p5.jpg';
import { FaCalendarAlt, FaArrowRight, FaBookOpen, FaUsers, FaLaptopCode } from 'react-icons/fa';

function MainPage() {
  // Sample blog posts data with Sinhala content
  const blogPosts = [
    {
      id: 1,
      title: "කොකාගේ පන නැති කතාව",
      image: img1,
      excerpt: "සිංහල සාහිත්‍යයේ අමුදුරු කතාවක් ඔස්සේ ගමන් කරන්න.",
      category: "සාහිත්‍ය",
      icon: <FaBookOpen />,
      date: "2023 මැයි 15"
    },
    {
      id: 2,
      title: "සමාජය තුළ සබඳතා ගොඩනැගීම",
      image: img2,
      excerpt: "සාමජිකත්වය හා සහයෝගීතාවය ගොඩනඟා ගන්නා ආකාරය.",
      category: "සමාජය",
      icon: <FaUsers />,
      date: "2023 ජූනි 2"
    },
    {
      id: 3,
      title: "නවීන තාක්ෂණය හා සංවර්ධනය",
      image: img4,
      excerpt: "වේගවත් ලෝකයකට අනුගත වන ආකාරය.",
      category: "තාක්ෂණය",
      icon: <FaLaptopCode />,
      date: "2023 ජූනි 18"
    }
  ];

  // Categories for filter
  const categories = [
    { id: 1, name: "සියල්ල", icon: "📚" },
    { id: 2, name: "සාහිත්‍ය", icon: "✍️" },
    { id: 3, name: "කලාව", icon: "🎨" },
    { id: 4, name: "ඉතිහාසය", icon: "🏛️" },
    { id: 5, name: "තාක්ෂණය", icon: "💻" }
  ];

  const [activeCategory, setActiveCategory] = React.useState(1);

  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* Hero Section with animated gradient */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>සෙවනාරාමයට සාදරයෙන් පිළිගනිමු</h1>
            <p>කැඩුණු සිත් සනසන ඔබට සෙවනක් වන ඔබගේ සෙවනාරාමය</p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn-primary">සාමාජිකත්වය ගන්න</Link>
              <Link to="/explore" className="btn-outline">ගවේෂණය කරන්න</Link>
            </div>
          </div>
          <div className="hero-pattern"></div>
        </section>

        {/* Featured Posts Section */}
        <section className="featured-section">
          <div className="section-header">
            <h2>විශේෂ අඩවි</h2>
            <p>අපගේ නවතම කතුවැකි සහ ලිපි</p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="posts-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="post-card">
                <div 
                  className="post-image"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <span className="post-category">
                    {post.icon} {post.category}
                  </span>
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-footer">
                    <span className="post-date">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      තවත් කියවන්න <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="section-header">
            <h2>අපගේ පාඨකයන් කියන දේ</h2>
            <p>සෙවනාරාමයේ අත්දැකීම්</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"සෙවනාරාමය මගේ දෛනික ජීවිතයේ අත්‍යවශ්‍ය කොටසක් බවට පත්ව ඇත. එය මගේ චින්තනය නව ගමන් මාර්ග වලට යොමු කරයි."</p>
              </div>
              <div className="testimonial-author">
                <img src={img3} alt="Author" />
                <div>
                  <h4>රවින්ද්ර ජයසූරිය</h4>
                  <span>ආචාර්ය, කොළඹ විශ්වවිද්‍යාලය</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"මෙම වෙබ් අඩවියේ ඇති ගැඹුරු අන්තර්ගතය හා සාහිත්‍යමය වටිනාකම මට නිතර ආකර්ෂණය කරගනී."</p>
              </div>
              <div className="testimonial-author">
                <img src={img5} alt="Author" />
                <div>
                  <h4>සුනේත්‍රා පෙරේරා</h4>
                  <span>ලේඛිකාව</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>ඔබත් අප සමඟ එකතු වීමට සූදානම්ද?</h2>
            <p>අපගේ සමාජයට එකතු වී නවතම ලිපි සහ කතුවැකි පිළිබඳව දැනුවත් වන්න.</p>
            <Link to="/signup" className="btn-primary">දැන් එකතු වන්න</Link>
          </div>
        </section>
      </div>
    </>
  );
}

// CSS Styles (using CSS-in-JS for this example)
const styles = `
  :root {
    --primary-color: #4a6bff;
    --secondary-color: #6e48aa;
    --text-color: #333;
    --light-text: #666;
    --bg-light: #f9f9ff;
    --white: #ffffff;
    --shadow: 0 4px 20px rgba(0,0,0,0.08);
    --radius: 12px;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Arial', sans-serif;
    color: var(--text-color);
    background: var(--bg-light);
    line-height: 1.6;
  }

  .main-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    border-radius: var(--radius);
    padding: 60px 40px;
    margin-bottom: 60px;
    overflow: hidden;
    text-align: center;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-section h1 {
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .hero-section p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }

  .hero-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
  }

  /* Buttons */
  .btn-primary {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    background: var(--white);
    color: var(--primary-color);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  }

  .btn-outline {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    border: 2px solid var(--white);
    background: transparent;
    color: var(--white);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    cursor: pointer;
    font-size: 1rem;
  }

  .btn-outline:hover {
    background: rgba(255,255,255,0.1);
    transform: translateY(-2px);
  }

  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .section-header h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text-color);
  }

  .section-header p {
    color: var(--light-text);
    font-size: 1.1rem;
  }

  /* Category Filter */
  .category-filter {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  .category-btn {
    padding: 8px 20px;
    border-radius: 50px;
    border: 1px solid #ddd;
    background: var(--white);
    color: var(--text-color);
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .category-btn:hover, .category-btn.active {
    background: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }

  .category-icon {
    font-size: 1rem;
  }

  /* Posts Grid */
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }

  .post-card {
    background: var(--white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
  }

  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  }

  .post-image {
    height: 200px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    padding: 15px;
    position: relative;
  }

  .post-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  }

  .post-category {
    position: relative;
    z-index: 2;
    background: rgba(0,0,0,0.6);
    padding: 5px 15px;
    border-radius: 50px;
    font-size: 0.8rem;
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .post-content {
    padding: 25px;
  }

  .post-content h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.3;
  }

  .post-content p {
    color: var(--light-text);
    margin-bottom: 20px;
    font-size: 0.95rem;
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-date {
    font-size: 0.8rem;
    color: var(--light-text);
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .read-more {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: var(--transition);
  }

  .read-more:hover {
    color: var(--secondary-color);
  }

  /* Testimonials */
  .testimonials-section {
    margin-bottom: 60px;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }

  .testimonial-card {
    background: var(--white);
    border-radius: var(--radius);
    padding: 30px;
    box-shadow: var(--shadow);
  }

  .testimonial-content {
    margin-bottom: 20px;
    font-style: italic;
    color: var(--light-text);
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .testimonial-author img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .testimonial-author h4 {
    font-size: 1rem;
    margin-bottom: 5px;
  }

  .testimonial-author span {
    font-size: 0.8rem;
    color: var(--light-text);
  }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    border-radius: var(--radius);
    padding: 60px 40px;
    text-align: center;
    margin-bottom: 40px;
  }

  .cta-content {
    max-width: 700px;
    margin: 0 auto;
  }

  .cta-section h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .cta-section p {
    margin-bottom: 30px;
    opacity: 0.9;
    font-size: 1.1rem;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2.2rem;
    }

    .hero-section {
      padding: 40px 20px;
    }

    .section-header h2 {
      font-size: 1.8rem;
    }

    .posts-grid {
      grid-template-columns: 1fr;
    }

    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn-primary, .btn-outline {
      width: 100%;
      max-width: 250px;
    }
  }

  @media (max-width: 480px) {
    .hero-section h1 {
      font-size: 1.8rem;
    }

    .hero-section p {
      font-size: 1rem;
    }

    .section-header h2 {
      font-size: 1.5rem;
    }

    .post-content {
      padding: 20px;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default MainPage;