import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNoButtonHover = () => {
    // Generate random position within viewport bounds
    const maxX = window.innerWidth - 200; // Account for button width
    const maxY = window.innerHeight - 100; // Account for button height
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <div className="hero-badge animate-slide-down">
          <span className="badge-icon">💕</span>
          <span>Sri & Madhu</span>
        </div>
        
        <h1 className="hero-title animate-slide-up">
          Our
          <span className="text-gradient"> Love Story</span>
        </h1>
        
        <p className="hero-description animate-slide-up">
          Create beautiful moments and cherish memories with the ones you love.
          Every heartbeat, every smile, every precious moment together.
        </p>
        
        <div className="hero-actions animate-scale-in">
          <button className="btn btn-primary">
            I Love You
            <span className="btn-icon">💖</span>
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/yes')}>
            Yes
            <span className="btn-icon">✨</span>
          </button>
          <button 
            className="btn btn-glass no-button"
            onMouseEnter={handleNoButtonHover}
            style={{
              position: noButtonPosition.x !== 0 ? 'fixed' : 'relative',
              left: noButtonPosition.x !== 0 ? `${noButtonPosition.x}px` : 'auto',
              top: noButtonPosition.y !== 0 ? `${noButtonPosition.y}px` : 'auto',
              transition: 'all 0.3s ease-out'
            }}
          >
            No
          </button>
        </div>
        
        <div className="hero-stats animate-fade-in">
          <div className="stat-item">
            <div className="stat-value">∞</div>
            <div className="stat-label">Love Forever</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">100%</div>
            <div className="stat-label">Pure Hearts</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">💝</div>
            <div className="stat-label">With Love</div>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="floating-card card-1">
          <div className="card-icon">💗</div>
          <div className="card-title">Endless Romance</div>
        </div>
        <div className="floating-card card-2">
          <div className="card-icon">🌹</div>
          <div className="card-title">Beautiful Moments</div>
        </div>
        <div className="floating-card card-3">
          <div className="card-icon">💑</div>
          <div className="card-title">Together Forever</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


