import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import MainPage from './pages/mainpage';
import About from './pages/About';
// Add other routes here when ready (e.g., Donate, Contact)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
        {/* <Route path="/donate" element={<Donate />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
