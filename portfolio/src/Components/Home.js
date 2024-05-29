import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../CSS/Home.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Skils from "./Skils";
import Footer from "./Footer";
import { saveAs } from 'file-saver';

const Home = () => {
  const [show, setshow] = useState(false);
  const downloadCV = () => {
    try {
      const pdfPath = process.env.PUBLIC_URL + '/fichier/CV MERN STACK.pdf';
      saveAs(pdfPath, 'CV MERN STACK.pdf');
    } catch (error) {
      console.error('Erreur lors du téléchargement du CV : ', error);
    }
  };
  
  
  return (
    <div>
      <header className="header">
        <nav>
          <div className="logo">
            <span>MME</span> CODE
          </div>
          <ul className={`links ${show ? "apparent" : ""}`}>
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
            <a href="#skills">Skills</a>
            </li>
            <li>
            <a href="#projects">Projects</a>
            </li>
            <li>
            <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="social_links">
            <Link to='https://github.com/meriemzineelabidine'>
              <FaGithub/>
            </Link>
            <Link to='https://www.linkedin.com/in/meriem-zineelabidine-103354294/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <FaLinkedin /></Link>
            <Link to='https://www.facebook.com/profile.php?id=100031171785873&mibextid=ZbWKwL'><FaFacebookSquare/></Link>
            <Link to='https://www.instagram.com/meriemzine1992?igsh=dHc3ZHo5dm15cTA4'><FaInstagram /></Link>
          </div>
          <div className="hamburger"><GiHamburgerMenu onClick={() => setshow(!show)} /></div>
        </nav>
      </header>
      <div id="home"className="hero-section">
        <div className="container">
          <div className="text">
            <h1> Meriem Zine elabidine </h1>
            <span>Web Developer</span>
            <p>
A passionate and ambitious computer engineer specializing in web development. Continuous learning and exploring new technologies are at the heart of my journey as a computer engineer. I am enthusiastic about staying updated with the latest advancements in the industry, allowing me to bring innovative solutions to real-world problems.</p>
            <button className="btn" onClick={downloadCV}>Download my CV</button>
        

          </div>
          <div className="img-pers">
            <img src="../images/Nouveau projet.png"></img>
          </div>
        </div>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="skills">
        <Skils></Skils>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="contact">
        <Contact ></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
   
    </div>
  );
};

export default Home;
