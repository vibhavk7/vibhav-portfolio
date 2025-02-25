import React, { useEffect } from 'react';
import '../css/Experience.css';

function Experience() {
  useEffect(() => {
    const listItems = document.querySelectorAll('.experience-body li');

    listItems.forEach((item) => {
      const text = item.innerText; // Get the original text
      const words = text.split(' '); // Split into words
      item.innerText = ''; // Clear only the text content, keeping the bullet

      words.forEach((word, wordIndex) => {
        // Create a span for each word
        const wordSpan = document.createElement('span');

        // Split the word into letters and create spans for each letter
        word.split('').forEach((letter, letterIndex) => {
          const letterSpan = document.createElement('span');
          letterSpan.innerText = letter; // Set the letter
          letterSpan.style.opacity = 0; // Start as invisible
          letterSpan.style.color = "#000"; // Ensure the letter color is black
          letterSpan.style.animation = `fadeIn 0.5s forwards`;
          letterSpan.style.animationDelay = `${(letterIndex * 0.05) + (wordIndex * 0.6)}s`; // Delay for each letter
          wordSpan.appendChild(letterSpan); // Append letter span to word span
        });

        item.appendChild(wordSpan); // Append the word span to the list item
        item.appendChild(document.createTextNode(' ')); // Append a space after each word
      });
    });
  }, []);

  return (
    <div className='experience-container'>
      <h2 className="experience-title" align="center">Experience</h2>
      <div>
        <h3 className="experience-subtitle">Shoreline AI (Skyline Labs Inc.) - Software Developer Intern</h3>
        <p className="experience-subtitle">July 2023 - June 2024</p>
        <ul className="experience-body">
          <li>Developed a versatile chatbot with text, graph (Highcharts), and table (Material-UI) outputs.</li>
          <li>Developed RESTful APIs with Flask for XML-RPC protocol integration and chatbot features, enabling HRMS/CRM
          operations.</li>
          <li>Improved SQL query generation through prompt engineering and optimized data formatting with Python wrappers.</li>
          <li>Utilized RTK Query for efficient endpoint calls and Redux for secure user credential storage.</li>
          <li>Conducted automated testing and continuous integration using Selenium and TestNG.</li>
        </ul>
        <p className="experience-subtitle">Accomplishments:</p>
        <ul className="experience-body">
          <li>Enhanced query processing efficiency by 30% and reduced data retrieval time by 25%.</li>
          <li>Successfully managed cross-functional collaboration and met deadlines in a high-pressure environment.</li>
        </ul>
      </div>
      <div>
        <h3 className="experience-subtitle">TEDx VIIT - Technical Head</h3>
        <p className="experience-subtitle">Sep 2020 - Sep 2022</p>
        <ul className="experience-body">
          <li>Developed a user-centric club website using HTML, CSS, and JavaScript.</li>
          <li>Managed a team of 4-5 as Technical Head, guiding them using Scrum and Agile methodologies.</li>
        </ul>
        <p className="experience-subtitle">Accomplishments:</p>
        <ul className="experience-body">
          <li>Increased user engagement and reduced website load time, demonstrating solutions-focused leadership</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
