import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import JobTracker from './components/JobTracker'; // your main job tracker
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/jobs" element={<JobTracker />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
