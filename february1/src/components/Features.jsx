import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { valentineWeekData } from '../data/valentineData';
import './Features.css';

const Features = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (dayId) => {
    navigate(`/day/${dayId}`);
  };

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            Celebrate
            <span className="text-gradient"> Valentine's Week</span>
          </h2>
          <p className="features-description">
            Seven days of love and romance, from February 7th to 14th. Each day is a special celebration of affection.
          </p>
        </div>

        <div className="features-grid">
          {valentineWeekData.map((day, index) => (
            <div
              key={day.id}
              className={`feature-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(day.id)}
              style={{ '--feature-color': day.color }}
            >
              <div className="feature-icon">{day.icon}</div>
              <h3 className="feature-title">{day.title}</h3>
              <p className="feature-description">{day.shortDescription}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
