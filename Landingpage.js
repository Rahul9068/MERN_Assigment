// src/components/LandingPage.js
import React from 'react';
import Notes from './Notes';
import './Landingpage.css';
const LandingPage = () => {
  return (
    <>
    <div className='container'>
      <h1>Landing Page</h1>
      <a href="/register">Register</a>
      <br />
      <a href="/login">Login</a>
    </div>
    <Notes/>
    </>
  );
};

export default LandingPage;
