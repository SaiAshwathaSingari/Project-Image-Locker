import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is currently active
    setIsDark(document.body.classList.contains('dark-mode'));
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setIsDark(!isDark);
  };

  return (
    <div className="about-container min-h-screen w-full bg-[#fbfffe] flex flex-col transition-colors duration-300">
      <nav className="navbar sticky top-0 z-50 w-full flex justify-between items-center px-5 py-3 bg-[#faa916] shadow-lg border-b-2 border-[#6d676e] transition-colors duration-300">
        <h2 className="navbar-title text-2xl font-bold text-[#1b1b1e] m-0 transition-colors duration-300">Image Locker</h2>
        
        <div className="flex items-center gap-5">
          <ul className="nav-links flex gap-5 list-none m-0 p-0">
            <li>
              <Link to="/" className="nav-link text-[#1b1b1e] hover:text-[#96031a] font-medium transition-colors duration-200 no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link text-[#1b1b1e] hover:text-[#96031a] font-medium transition-colors duration-200 no-underline">
                Register
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link text-[#1b1b1e] hover:text-[#96031a] font-medium transition-colors duration-200 no-underline">
                About Us
              </Link>
            </li>
          </ul>
          
          <button
            onClick={toggleDarkMode}
            className="dark-toggle p-2 rounded-lg bg-[#1b1b1e] text-[#fbfffe] hover:bg-[#96031a] transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className="main-content p-5 flex-1">
        <div className="about-content max-w-4xl mx-auto">
          <h1 className="about-title text-4xl font-bold text-[#1b1b1e] mb-8 text-center transition-colors duration-300">About Image Locker</h1>
          
          <div className="about-grid grid md:grid-cols-2 gap-8 mb-12">
            <div className="about-left space-y-6">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] transition-colors duration-300">Our Mission</h2>
              <p className="mission-text text-lg leading-relaxed transition-colors duration-300">
                Image Locker is dedicated to providing secure, reliable, and user-friendly image storage solutions. 
                We believe that your memories and important visual content deserve the highest level of protection 
                and accessibility.
              </p>
              
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] transition-colors duration-300">What We Offer</h2>
              <ul className="features-list space-y-3 text-lg transition-colors duration-300">
                <li className="feature-item flex items-center">
                  <span className="feature-bullet w-2 h-2 bg-[#faa916] rounded-full mr-3"></span>
                  Secure cloud storage for your images
                </li>
                <li className="feature-item flex items-center">
                  <span className="feature-bullet w-2 h-2 bg-[#faa916] rounded-full mr-3"></span>
                  Advanced encryption and privacy protection
                </li>
                <li className="feature-item flex items-center">
                  <span className="feature-bullet w-2 h-2 bg-[#faa916] rounded-full mr-3"></span>
                  Easy sharing and collaboration features
                </li>
                <li className="feature-item flex items-center">
                  <span className="feature-bullet w-2 h-2 bg-[#faa916] rounded-full mr-3"></span>
                  Cross-platform accessibility
                </li>
              </ul>
            </div>
            
            <div className="about-right space-y-6">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] transition-colors duration-300">Why Choose Us</h2>
              <div className="benefits-grid space-y-4">
                <div className="benefit-card p-4 bg-white/50 rounded-lg border border-[#faa916]/20">
                  <h3 className="benefit-title font-semibold mb-2 transition-colors duration-300">Security First</h3>
                  <p className="benefit-text transition-colors duration-300">
                    Your images are protected with state-of-the-art encryption and secure cloud infrastructure.
                  </p>
                </div>
                
                <div className="benefit-card p-4 bg-white/50 rounded-lg border border-[#faa916]/20">
                  <h3 className="benefit-title font-semibold mb-2 transition-colors duration-300">User-Friendly</h3>
                  <p className="benefit-text transition-colors duration-300">
                    Intuitive interface designed for users of all technical levels with seamless navigation.
                  </p>
                </div>
                
                <div className="benefit-card p-4 bg-white/50 rounded-lg border border-[#faa916]/20">
                  <h3 className="benefit-title font-semibold mb-2 transition-colors duration-300">24/7 Support</h3>
                  <p className="benefit-text transition-colors duration-300">
                    Round-the-clock customer support to help you with any questions or concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cta-section text-center">
            <h2 className="cta-title text-2xl font-semibold mb-6 transition-colors duration-300">Ready to Get Started?</h2>
            <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/dashboard" 
                className="cta-button px-8 py-3 bg-[#faa916] hover:bg-[#96031a] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer w-full bg-[#1b1b1e] border-t-2 border-[#faa916] py-4 px-5 mt-auto transition-colors duration-300">
        <div className="flex justify-between items-center">
          <div className="copyright text-[#fbfffe] font-medium transition-colors duration-300">
            © 2025 Image Locker. All rights reserved.
          </div>
          <div className="footer-links flex gap-4">
            <Link to="/privacy" className="footer-link text-[#fbfffe] hover:text-[#faa916] transition-colors duration-200 no-underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link text-[#fbfffe] hover:text-[#faa916] transition-colors duration-200 no-underline">
              Terms of Service
            </Link>
            <Link to="/contact" className="footer-link text-[#fbfffe] hover:text-[#faa916] transition-colors duration-200 no-underline">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
