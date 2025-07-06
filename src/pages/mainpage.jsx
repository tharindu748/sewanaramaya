import React from 'react';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';

function MainPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
title: "කොකාගෙ පන නෑ, උකපුල් දේවිය, හුදකලා ඇත්තක්",
      excerpt: "Discover the latest trends in UI/UX for 2023 and beyond.",
      category: "Design",
      date: "May 15, 2023"
    },
    {
      id: 2,
      title: "The Art of Community Building",
      excerpt: "How to create engaging online communities that thrive.",
      category: "Community",
      date: "June 2, 2023"
    },
    {
      id: 3,
      title: "Next-Gen JavaScript Frameworks",
      excerpt: "Comparing the newest tools for modern web development.",
      category: "Technology",
      date: "June 18, 2023"
    }
  ];

  return (
    <>
      <Navbar />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
          color: 'white',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '800',
            marginBottom: '20px'
          }}>සෙවනාරාමයට සාදරයෙන් පිලිගනිමු
</h1>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>කැඩුනු සිත් සනසන ඔබට සෙවනක් වන ඔබගේ සෙවනාරාමය.</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 30px',
                borderRadius: '50px',
                border: 'none',
                background: 'white',
                color: '#6e8efb',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}>Join Now</button>
            </Link>
            <Link to="/explore" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 30px',
                borderRadius: '50px',
                border: '2px solid white',
                background: 'transparent',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}>Explore</button>
            </Link>
          </div>
        </div>

        {/* Featured Posts */}
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          marginBottom: '20px',
          color: '#333'
        }}>කලාකෘති</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '25px',
          marginBottom: '40px'
        }}>
          {blogPosts.map(post => (
            <div key={post.id} style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                height: '200px',
                background: `linear-gradient(45deg, ${getRandomGradient()})`,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
                color: 'white'
              }}>
                <span style={{
                  background: 'rgba(0,0,0,0.6)',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '0.8rem'
                }}>{post.category}</span>
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '10px',
                  lineHeight: '1.3'
                }}>{post.title}</h3>
                <p style={{
                  color: '#666',
                  marginBottom: '15px',
                  lineHeight: '1.5'
                }}>{post.excerpt}</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#999'
                  }}>{post.date}</span>
                  <Link to={`/blog/${post.id}`} style={{
                    textDecoration: 'none',
                    color: '#6e8efb',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}>Read More →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '20px'
          }}>Ready to dive in?</h2>
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto 30px',
            color: '#555'
          }}>Join our community of creators and innovators today.</p>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '15px 40px',
              borderRadius: '50px',
              border: 'none',
              background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(110, 142, 251, 0.4)'
            }}>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

// Helper function for random gradients
function getRandomGradient() {
  const gradients = [
    '#a18cd1, #fbc2eb',
    '#fbc2eb, #a6c1ee',
    '#f093fb, #f5576c',
    '#5ee7df, #b490ca',
    '#d299c2, #fef9d7',
    '#96fbc4, #f9f586'
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}

export default MainPage;