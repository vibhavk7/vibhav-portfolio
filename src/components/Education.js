import React from 'react';
import '../css/Education.css';
function Education() {
  return (
    // <section className="education">
    <div className="education-container">
      <h2 className="education-title" align = "center">Education</h2>
      <div>
        <h3 className="education-subtitle">Trinity College Dublin</h3>
        <p className="education-subtitle">Masters of Science in Computer Science - Intelligent Systems <br/> (2024 - 2025)</p>
      </div>
      <div>
        <h3 className="education-subtitle">Vishwakarma Institute of Information Technology <br/> (affiliated to Pune University)</h3>
        <p className="education-subtitle">Bachelor of Technology in Computer Science <br />(2020 - 2024) <br/> CGPA: 9.3/10 (3.78/4 Equivalent)</p>
      </div>
    {/* </section> */}
    </div>
  );
}

export default Education;
