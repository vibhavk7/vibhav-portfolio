import React, { useEffect } from 'react';
import '../css/Projects.css';

function Projects() {
  useEffect(() => {
    const listItems = document.querySelectorAll('.projects-body li');

    listItems.forEach((item) => {
      const text = item.innerText; // Get the original text
      const words = text.split(' '); // Split into words
      item.innerHTML = ''; // Clear the original content

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');

        // Split the word into letters and create spans for each letter
        word.split('').forEach((letter, letterIndex) => {
          const letterSpan = document.createElement('span');
          letterSpan.innerText = letter; // Set the letter
          letterSpan.style.opacity = 0; // Start as invisible
          letterSpan.style.color = "#333"; // Color for body text
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
    <div className="projects-container">
      <h2 className="projects-title" align="center">Projects</h2>
      <div>
        <h3 className="projects-subtitle">Bank Management System</h3>
        <p className="projects-subtitle">Technologies: Java, Spring Boot, React, JWT, JDBC, Docker, Microservices, Database Management</p>
        <ul className="projects-body">
          <li>Developed a CRUD system for banking functions, including account and transaction management.</li>
          <li>Built a Java Spring Boot backend, React frontend, with MySQL and MongoDB databases.</li>
          <li>Secured authentication with JWT and enabled scalable deployment with Docker.</li>
          <li>Designed microservices with synchronous/asynchronous communication and service discovery.</li>
        </ul>
      </div>
      <div>
        <h3 className="projects-subtitle">E-Commerce DataOps Pipeline</h3>
        <p className="projects-subtitle">Technologies: Databricks, Spark, Azure Data Factory, Data Engineering, Synapse, Power BI</p>
        <ul className="projects-body">
          <li>Built a scalable, cloud-based architecture with Azure Data Factory, ADLS Gen2, and Databricks.</li>
          <li>Implemented the Medallion Architecture for data organization (Bronze, Silver, Gold layers).</li>
          <li>Ingested data from multiple sources (SQL DB, HTTP APIs, MongoDB).</li>
          <li>Transformed and enriched datasets for insights using Spark.</li>
          <li>Visualized results with Azure Synapse and Power BI.</li>
        </ul>
      </div>
      <div>
        <h3 className="projects-subtitle">Sales Data Visualization</h3>
        <p className="projects-subtitle">Technologies: SQL, Power BI, ETL, Kaggle, Warehousing, Data Analysis, Data Pipelines</p>
        <ul className="projects-body">
          <li>Created business scenarios to contextualize data visualizations.</li>
          <li>Performed data cleaning and visualization to ensure data accuracy.</li>
          <li>Built an interactive E-Commerce dashboard for insights using advanced visualization techniques.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
