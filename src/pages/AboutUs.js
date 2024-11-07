import React from 'react';
import '../css/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>We are a forward-thinking tech company, passionate about creating innovative solutions that improve lives.</p>

            <section className="about-mission">
                <h2>Our Mission</h2>
                <p>Our mission is to revolutionize the way people interact with technology by offering cutting-edge products and services.</p>
            </section>

            <section className="about-values">
                <h2>Core Values</h2>
                <ul>
                    <li><strong>Innovation:</strong> Always striving for new and better solutions.</li>
                    <li><strong>Customer Focus:</strong> Putting customers first in everything we do.</li>
                    <li><strong>Integrity:</strong> Being honest, open, and committed to doing what’s best.</li>
                    <li><strong>Teamwork:</strong> Collaborating and supporting each other to achieve goals.</li>
                </ul>
            </section>

            <section className="about-team">
                <h2>Meet Our Team</h2>
                <p>Our team is made up of dedicated professionals with diverse backgrounds, all united by a passion for technology and innovation.</p>
            </section>
        </div>
    );
};
export default AboutUs;