import React from 'react';
import '../css/Home.css';
import '../App.css'

function Home() {
  return (
    <><h1 className="heading">
      Welcome to Vibhav's PortFolio
    </h1><div className="home-container">

        <h2 className="profile-summary">Aspiring AI Master’s student with a strong background in full-stack development and prompt engineering. Skilled in chatbot
          integration, data manipulation, agile, business analysis, and team management. Proven leader in high-pressure environments,
          adaptable and focused on driving project success</h2>

        <div className="profile-content">
          <img src="/vibhavphoto.jpeg" className="profile-image" />

          <h1 className="name">Vibhav Kulkarni</h1>

          <div className="contact-info">
            <a href="mailto:vibhavk765@gmail.com" className="contact-link">vibhavk765@gmail.com</a>
            <span className="contact-separator">|</span>
            <span className="contact-link">+353 899539898</span>
            <span className="contact-separator">|</span>
            <a href="https://www.linkedin.com/in/vibhav-kulkarni" className="contact-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

          <p className="address">Dorset Street Upper, Dublin, Ireland</p>
        </div>

      {/* Word Cloud Section */}
      <div className="word-cloud">
        <span>Full-Stack Developer</span>
        <span>React</span>
        <span>Flask</span>
        <span>SpringBoot</span>
        <span>JavaScript</span>
        <span>Big Data</span>
        <span>Data Analysis</span>
        <span>Object-Oriented Programming</span>
        <span>Java</span>
        <span>Prompt Engineering</span>
        <span>IBM Maximo</span>
        <span>Redux</span>
        <span>Databricks</span>
        <span>SQL</span>
      </div>        
      </div></>
  );
}

export default Home;
