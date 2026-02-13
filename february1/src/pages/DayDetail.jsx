import { useParams, useNavigate } from 'react-router-dom';
import { valentineWeekData } from '../data/valentineData';
import './DayDetail.css';

const DayDetail = () => {
  const { dayId } = useParams();
  const navigate = useNavigate();
  
  const dayData = valentineWeekData.find(day => day.id === dayId);

  if (!dayData) {
    return (
      <div className="day-detail-error">
        <div className="container">
          <h1>Day Not Found</h1>
          <p>Sorry, we couldn't find information about this day.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="day-detail">
      <div className="day-hero">
        <div className="container">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          
          <div className="day-hero-content animate-fade-in">
            <div className="day-icon">{dayData.icon}</div>
            <h1 className="day-title">{dayData.title}</h1>
            <p className="day-date">{dayData.date}</p>
            <p className="day-short-desc">{dayData.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="day-content">
        <div className="container">
          <section className="content-section animate-slide-up">
            <h2>About {dayData.title}</h2>
            <p className="full-description">{dayData.fullDescription}</p>
          </section>

          <div className="cta-section animate-scale-in">
            <h3>Ready to celebrate?</h3>
            <p>Make this {dayData.title} unforgettable for your loved one!</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Explore Other Days
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayDetail;
