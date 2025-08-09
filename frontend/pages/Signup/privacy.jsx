import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Privacy() {
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
    <div className="terms-container min-h-screen w-full bg-[#fbfffe] flex flex-col transition-colors duration-300">
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
        <div className="terms-content max-w-4xl mx-auto">
          <h1 className="terms-title text-4xl font-bold text-[#1b1b1e] mb-8 text-center transition-colors duration-300">Privacy Policy – Image Locker</h1>
          <p className="effective-date text-lg text-[#1b1b1e] mb-8 text-center transition-colors duration-300">Effective Date: 9/8/2025</p>
          
          <div className="terms-sections space-y-8">
            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">1. Introduction</h2>
              <p className="section-text text-[#1b1b1e] text-lg leading-relaxed transition-colors duration-300">
                Image Locker values your privacy and is committed to protecting your personal information and uploaded content.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">2. Information We Collect</h2>
              <div className="definitions-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p><strong>We may collect:</strong></p>
                <p><strong>Account Information:</strong> Name, email address, and login credentials.</p>
                <p><strong>Uploaded Content:</strong> Images and files you store with us</p>
                <p><strong>Usage Data:</strong> Device type, browser, IP address, and activity logs</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">3.  How We Use Your Information</h2>
              <div className="eligibility-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>Provide and maintain our services.</p>
                <p>Securely store your images</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">4.Data Security</h2>
              <div className="responsibilities-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>We use state-of-the-art encryption and secure cloud infrastructure to protect your images.</p>
                <p>Access to your data is restricted to authorized personnel only.</p>
                
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">5. Your Rights</h2>
              <p className="section-text text-[#1b1b1e] text-lg leading-relaxed mb-3 transition-colors duration-300">You may:</p>
              <ul className="acceptable-use-list space-y-2 text-[#1b1b1e] text-lg transition-colors duration-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#faa916] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Request access to your data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#faa916] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                 Request deletion of your account and stored images
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#faa916] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Update your account information at any time
                </li>
              </ul>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">6. Third-Party Links</h2>
              <div className="content-rights-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>Our service may contain links to third-party websites. We are not responsible for their privacy practices.</p>
                
              </div>
            </section>


            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">14. Contact</h2>
              <p className="section-text text-[#1b1b1e] text-lg leading-relaxed transition-colors duration-300">
                For any questions, email us at: <a href="mailto:abhishekpoojary2004@gmail.com" className="email-link text-[#faa916] hover:text-[#96031a] transition-colors duration-200 underline">abhishekpoojary2004@gmail.com</a>
              </p>
            </section>
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

export default Privacy;
