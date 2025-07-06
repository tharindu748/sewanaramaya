import React from 'react';
import './Home.css';
import templeImage from '../asserts/sewane.jpg';

function Home() {
  return (
    <div className="home-page">
      <div className="animated-bg"></div>

      <div className="content-box">
        <h1 className="main-heading">සෙවනාරාමයට</h1>

        <div className="image-container">
          <img
            src={templeImage}
            alt="Sewanaramaya Temple"
            className="temple-image"
          />
          <div className="image-overlay"></div>
        </div>

        <p className="description">
          කැඩුනු සිත් සනසන ඔබට සෙවනක් වන ඔබගේ සෙවනාරාමය
          <br />
          අපගේ සේවනාරාමය  කටයුතු, තොරතුරු
        </p>

        <button
          className="donate-btn"
          onClick={() => (window.location.href = '/main')}
        >
          C...කරන්න
          <span className="btn-effect"></span>
        </button>
      </div>
    </div>
  );
}

export default Home;
