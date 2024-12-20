import React, { useState, useEffect } from 'react';
import profilePic from './Images/me.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Small delay for smoother effect after initial render
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="home-page">
      <main>
        <div 
          className="profile-container" 
          style={{ 
            opacity: showContent ? 1 : 0, 
            transform: showContent ? 'translateY(0)' : 'translateY(100px)', 
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <div>
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
          <div className="text-container">
            <p className="hello">Hello</p>
            <p><b>A Bit About Me</b></p>
            <p>
              I'm a passionate and versatile designer with a keen eye for detail. I love creating visually appealing and user-friendly designs.
            </p>
            <div className="buttons">
              <Link to="/resume" className="btn btn1">
                Resume
              </Link>
              <Link to="/projects" className="btn btn2">
                Projects
              </Link>
              <Link to="/contact" className="btn btn3">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-container">
          <div className="footer-info">
            <p><strong>Phone</strong></p>
            <p>040-4200-7777</p>
          </div>
          <div className="footer-info">
            <p><strong>Email</strong></p>
            <p>me@mymail.com</p>
          </div>
          <div className="footer-social">
            <p><strong>Follow Me</strong></p>
            <a href="https://www.linkedin.com/in/harinivas-ganjarla-728685274/" className="link">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" fill="none">
                <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
              </svg>
            </a>
            <a href="https://github.com/harinivas-28" aria-label="Homepage" className="footer-octicon" title="GitHub">
              <svg aria-hidden="true" className="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
          <div className="footer-rights">
            <p>&copy; 2024 By Harinivas. Powered and secured by Me</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;