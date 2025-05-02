import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Header from './components/layout/Header';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CalculatorPage from './pages/CalculatorPage';
import ReducePage from './pages/ReducePage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/reduce" element={<ReducePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;