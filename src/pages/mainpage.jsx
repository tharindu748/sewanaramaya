import React from 'react';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';

function MainPage() {
  // Sample blog posts data with Sinhala content
  const blogPosts = [
    {
      id: 1,
      title: "කොකාගෙ පන නෑ, උකපුල් දේවිය, හුදකලා ඇත්තක්",
      excerpt: "සිංහල සාහිත්‍යයේ ගැඹුරු අර්ථ සහිත කෙටි කතාවක්",
      category: "සාහිත්‍යය",
      date: "ජූලි 15, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "රන්වන් මල් පෙති වගේ උදාසීන මනසක්",
      excerpt: "කවියක සිතුවිලි සහ එහි ගැඹුරු අර්ථ",
      category: "කවි",
      date: "අගෝස්තු 2, 2023",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "අම්මාගේ ඇඳුම් පෙට්ටිය",
      excerpt: "සිහිල් සටහන් වලින් ගලා එන ආදරණීය චරිතයක්",
      category: "සිහිල් සටහන්",
      date: "සැප්තැම්බර් 18, 2023",
      readTime: "7 min read"
    }
  ];

  return (
    <>
      <Navbar />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: "'Noto Sans Sinhala', 'Inter', sans-serif"
      }}>
        {/* Hero Section with cultural design */}
        <div style={{
          background: 'linear-gradient(135deg, #2c3e50, #4a6491)',
          color: 'white',
          borderRadius: '16px',
          padding: '60px 40px',
          marginBottom: '50px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/old-map.png")',
            opacity: '0.1',
            pointerEvents: 'none'
          }}></div>
          
          <h1 style={{ 
            fontSize: '3.2rem', 
            fontWeight: '800',
            marginBottom: '20px',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>සෙවනාරාමයට සාදරයෙන් පිළිගනිමු</h1>
          
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>කැඩුණු සිත් සනසන ඔබට සෙවනක් වන ඔබගේ සෙවනාරාමය</p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 32px',
                borderRadius: '50px',
                border: 'none',
                background: '#f8c537',
                color: '#2c3e50',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>සම්බන්ධ වන්න</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </Link>
            
            <Link to="/explore" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '14px 32px',
                borderRadius: '50px',
                border: '2px solid white',
                background: 'transparent',
                color: 'white',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>ගවේෂණය කරන්න</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Featured Posts with cultural design */}
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '30px',
          color: '#2c3e50',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '10px'
        }}>
          කලාකෘති
          <span style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '50px',
            height: '4px',
            background: '#f8c537',
            borderRadius: '2px'
          }}></span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {blogPosts.map(post => (
            <div key={post.id} style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '1px solid rgba(0,0,0,0.05)',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
              }
            }}>
              <div style={{
                height: '220px',
                background: `linear-gradient(45deg, ${getCulturalGradient()})`,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper-3.png")',
                  opacity: '0.2',
                  pointerEvents: 'none'
                }}></div>
                <span style={{
                  background: 'rgba(0,0,0,0.7)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  zIndex: '1'
                }}>{post.category}</span>
              </div>
              
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                  color: '#2c3e50'
                }}>{post.title}</h3>
                
                <p style={{
                  color: '#555',
                  marginBottom: '20px',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>{post.excerpt}</p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#777',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {post.readTime}
                    </span>
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#777'
                    }}>{post.date}</span>
                  </div>
                  
                  <Link to={`/blog/${post.id}`} style={{
                    textDecoration: 'none',
                    color: '#4a6491',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'color 0.2s ease'
                  }}>
                    <span>වැඩිදුර කියවන්න</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Call to Action */}
        <div style={{
          background: '#f5f2ea',
          borderRadius: '16px',
          padding: '50px 40px',
          textAlign: 'center',
          marginBottom: '50px',
          border: '1px solid #e8e1d3',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/rice-paper-2.png")',
            opacity: '0.3',
            pointerEvents: 'none'
          }}></div>
          
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#2c3e50',
            position: 'relative'
          }}>ඔබගේ කතාව අප සමඟ බෙදාගන්න</h2>
          
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            color: '#555',
            lineHeight: '1.6',
            position: 'relative'
          }}>සිංහල සාහිත්‍ය කලාවේ නව මාවතක් ගවේෂණය කිරීමට අප සමඟ එකතු වන්න</p>
          
          <Link to="/signup" style={{ textDecoration: 'none', position: 'relative' }}>
            <button style={{
              padding: '16px 42px',
              borderRadius: '50px',
              border: 'none',
              background: '#2c3e50',
              color: 'white',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(44, 62, 80, 0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              ':hover': {
                background: '#3a5169',
                transform: 'translateY(-2px)'
              }
            }}>
              <span>ඇතුල් වන්න</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="8.5" cy="7" r="4" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 8v6M23 11h-6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

// Cultural-inspired gradients
function getCulturalGradient() {
  const gradients = [
    '#d4a59a, #bd7a62', // Traditional clay colors
    '#7a6a5f, #a38f84', // Stone colors
    '#4a6491, #2c3e50', // Deep blue
    '#a78a7f, #d4b8a7', // Earth tones
    '#5a3921, #8c6a56', // Wood colors
    '#6b4226, #9d7553'  // Traditional browns
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}

export default MainPage;