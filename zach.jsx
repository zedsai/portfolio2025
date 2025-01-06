import React from 'react';
import './zach.css';

function App() {
    return (
        <div>
            {/* Header */}
            <header>
                <div className="logo">Z</div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <h1>Welcome to My World</h1>
                    <p>A quick introduction to who I am and what I do.</p>
                    <div className="hero-links">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>A quick summary of me and my journey in computer science.</p>
                        <a href="#more">More &gt;</a>
                    </div>
                    <div className="about-image">
                        <img src="headshot.jpg" alt="My Headshot" />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <ul>
                    <li>Leveraging AI for Improved Public Transit</li>
                    <li>OpenAI Based Calendar</li>
                    <li>VCrypt Financial Startup Website</li>
                    <li>GearLoop Mock Database</li>
                    <li>RaspberryPI Info Panels/Slideshows</li>
                </ul>
            </section>

            {/* Involvement Section */}
            <section id="involvement" className="involvement">
                <h2>Involvement</h2>
                <ul>
                    <li>Vice President, Communications, Recruitment Committee/Marketing...</li>
                    <li>Vice President of Scholarship & Leadership for the InterFraternity Council</li>
                    <li>CAPS Volunteer</li>
                    <li>Avery Park Cleanup Volunteer</li>
                </ul>
            </section>

            {/* Professional Experience Section */}
            <section id="experience" className="experience">
                <h2>Professional Experience</h2>
                <ul>
                    <li>Software Developer for Corvallis startup, VCrypt Financial</li>
                    <li>Roofing Driver for Interstate Roofing Inc.</li>
                </ul>
            </section>

            {/* Programming Languages Section */}
            <section id="skills" className="skills">
                <h2>Programming Languages</h2>
                <ul>
                    <li>Front-end: HTML, CSS, React</li>
                    <li>Back-end: JavaScript, Rust</li>
                    <li>Full-Stack: Python, C, C++</li>
                    <li>DevOps: Docker</li>
                </ul>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h2>Contact</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send</button>
                </form>
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2025 My Personal Website</p>
                <div className="footer-links">
                    <a href="#contact">Contact Info</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
