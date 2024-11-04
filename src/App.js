import React from 'react';
import './App.css';
import Home from './components/Home'; // Adjust the path accordingly
import Education from './components/Education'; // New component
import Projects from './components/Projects'; // New component
import Experience from './components/Experience'; // New component
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations
import Volunteering from './components/Volunteering';

function App() {
  React.useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh();
  }, []);

  return (
    <div  data-aos="zoom-out" data-aos-duration="2000" className="App">
      <Home />
      
      <div data-aos="zoom-in" data-aos-duration="2000" className="main-content">
        <div className="left-side">
          <Education />
          <Projects />
        </div>
        <div className="right-side">
          <Experience />
          <Volunteering />
        </div>
        
      </div>
      <div >
          
        </div>
    </div>
  );
}

export default App;
