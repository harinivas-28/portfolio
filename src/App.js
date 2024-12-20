import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; 
import logo from './logo.jpg';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASoz/Tvu1qydj9g8f86gUmkaCq/gNq/dHJmqqw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">
            <img src={logo} alt='logo' className='logox' />
            <p><h2>Harinivas G</h2></p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link> {/* Link to Home */}
              </li>
              <li>|</li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>|</li>
              <li><button class="mail__btn" onClick={() => window.location.href = 'mailto:harinivasg28704@gmail.com'}>Email Me</button></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;