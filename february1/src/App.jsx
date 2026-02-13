import { Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import DayDetail from './pages/DayDetail';
import YesPage from './pages/YesPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/day/:dayId" element={<DayDetail />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </div>
  );
}

export default App;
