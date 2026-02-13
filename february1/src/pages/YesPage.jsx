import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './YesPage.css';

const YesPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="yes-page">
      {/* Floating Hearts Background */}
      <div className="hearts-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`heart heart-${i + 1}`}>💖</div>
        ))}
      </div>

      {/* Main Content */}
      <div className={`yes-content ${showContent ? 'visible' : ''}`}>
        <div className="emoji-circle">
          <span className="emoji-large">💕</span>
        </div>

        <h1 className="yes-title">
          Yay! You Said Yes! 💖
        </h1>

        <div className="love-emojis">
          <span className="emoji bounce-1">💝</span>
          <span className="emoji bounce-2">💗</span>
          <span className="emoji bounce-3">💓</span>
          <span className="emoji bounce-4">💞</span>
          <span className="emoji bounce-5">💕</span>
        </div>

        <p className="yes-message">
          You've made my heart so happy! 💗<br/>
          Every moment with you is a beautiful memory.<br/>
          Together, we create our own love story! 🌹
        </p>

        <div className="sparkles">
          <span className="sparkle sparkle-1">✨</span>
          <span className="sparkle sparkle-2">⭐</span>
          <span className="sparkle sparkle-3">💫</span>
          <span className="sparkle sparkle-4">✨</span>
          <span className="sparkle sparkle-5">⭐</span>
          <span className="sparkle sparkle-6">💫</span>
        </div>

        <div className="love-quotes">
          <p className="quote">"Love is not just looking at each other,</p>
          <p className="quote">it's looking in the same direction." 💑</p>
        </div>

        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Explore Our Love Journey
          <span className="btn-icon">💖</span>
        </button>
      </div>

      {/* Animated Love Symbols */}
      <div className="floating-symbols">
        <span className="symbol symbol-1">🌹</span>
        <span className="symbol symbol-2">💐</span>
        <span className="symbol symbol-3">🌺</span>
        <span className="symbol symbol-4">🌸</span>
        <span className="symbol symbol-5">🌷</span>
      </div>
    </div>
  );
};

export default YesPage;
