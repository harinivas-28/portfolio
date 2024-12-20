import React from 'react';
import './Projects.css';
import text2sql from './Images/text2sql.png'
import chatbot from './Images/chatbot.png'
import login from './Images/login.png'
import portfolio from './Images/portfolio.png'

function Projects() {
  return (
    <div className="projects-page">
      <div class="main_div">
        <h1>Projects</h1>
        <section class="project">
            <div class="project-content">
                <h2>Scorpio:The AI Powered ChatBot</h2>
                <p>The AI driven chatbot a part of (2023's SIH1290) which uses API with google. A classic User Interface with chat history and more.
                The project is developed with Python Framework Flask app. Avaliable in my linkedin.For Code Please visit my GitHub</p>
                <a href='https://scorpio-ago3.onrender.com/'>Click Here to Visit</a>
            </div>
            <div class="project-image">
                <img src={chatbot} alt="Chatbot" class="imgs"></img>
            </div>
        </section>

        <section class="project">
            <div class="project-content">
                <h2>LLM Based Text 2 SQL</h2>
                <p>Introducing "TEXT-2-SQL," an innovative React-powered web app for natural language-to-SQL query generation! Simply upload your CSV dataset, ask questions, and receive real-time SQL queries with interactive visualizations. Empower data-driven decisions with seamless insights and graphical analysis!. Code Avaliable im my github</p>
                <a href='https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'>Click Here to Visit</a>
            </div>
            <div class="project-image">
                <img src={text2sql} alt="Text 2 SQL" class="imgs"></img>
            </div>
        </section>
        <section class="project">
            <div class="project-content">
                <h2>My PortFolio</h2>
                <p>the Webpages are created using React. It consists of my information such as the Resume, Projects I've done. Most Probably you are reading this description from my portfolio website.</p>
                <a href='/'>Click Here to Visit</a>
            </div>
            <div class="project-image">
                <img src={portfolio} alt="Portfolio Website" class="imgs"></img>
            </div>
        </section>
        <section class="project">
            <div class="project-content">
                <h2>Responsive Login Page</h2>
                <p>Simplest Login Page with Parallax effect. Sliding Sign In and Sign Up effect using java script. The Code is Avaliable in my Github Profile please check it out.</p>
                <a href='https://harinivas-28.github.io/SignIn-SignUp-Page/'>Click Here to Visit</a>
            </div>
            <div class="project-image">
                <img src={login} alt="Login Page" class="imgs"></img>
            </div>
        </section>
    </div>
    </div>
  );
}

export default Projects;