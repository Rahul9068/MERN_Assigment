import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/Landingpage';
import Register from './component/Register';
import Login from './component/Login';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define the home page route */}
        <Route path="/" element={<LandingPage />} />

        {/* Define routes for Register, Login, and Notes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
