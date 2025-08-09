import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Terms() {
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
          <h1 className="terms-title text-4xl font-bold text-[#1b1b1e] mb-8 text-center transition-colors duration-300">Terms of Service – Image Locker</h1>
          <p className="effective-date text-lg text-[#1b1b1e] mb-8 text-center transition-colors duration-300">Effective Date: 9/8/2025</p>
          
          <div className="terms-sections space-y-8">
            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">1. Introduction</h2>
              <p className="section-text text-[#1b1b1e] text-lg leading-relaxed transition-colors duration-300">
                Welcome to Image Locker. By accessing or using our website and services, you agree to these Terms of Service. If you do not agree, please do not use Image Locker.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">2. Definitions</h2>
              <div className="definitions-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p><strong>"Service"</strong> means the Image Locker platform, including all features, tools, and content.</p>
                <p><strong>"User"</strong> means any person who accesses or uses our Service.</p>
                <p><strong>"Content"</strong> means images or files uploaded by users.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">3. Eligibility</h2>
              <div className="eligibility-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>You must be at least 13 years old (or the legal age in your jurisdiction) to use Image Locker.</p>
                <p>You must have the legal capacity to enter into this agreement.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">4. Account Responsibilities</h2>
              <div className="responsibilities-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>You are responsible for maintaining the confidentiality of your account and password.</p>
                <p>You agree to provide accurate and up-to-date information.</p>
                <p>You are responsible for all activities that occur under your account.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">5. Acceptable Use</h2>
              <p className="section-text text-[#1b1b1e] text-lg leading-relaxed mb-3 transition-colors duration-300">You agree not to:</p>
              <ul className="acceptable-use-list space-y-2 text-[#1b1b1e] text-lg transition-colors duration-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#faa916] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Upload content that violates laws or infringes on intellectual property rights.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#faa916] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Upload harmful, malicious, or illegal content (including viruses or malware).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#faa916] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Attempt to hack, reverse-engineer, or disrupt the Service.
                </li>
              </ul>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">6. User Content and Rights</h2>
              <div className="content-rights-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>You retain ownership of the images you upload.</p>
                <p>By uploading, you grant Image Locker a non-exclusive license to store, process, and display your content solely for providing our services.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">7. Intellectual Property</h2>
              <div className="ip-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>All service features, designs, and branding are owned by Image Locker.</p>
                <p>You may not copy, modify, or distribute our intellectual property without permission.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">8. Payment & Billing (if applicable)</h2>
              <div className="payment-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>If premium features are offered, all payments are subject to our billing terms.</p>
                <p>Refunds will be handled in accordance with our refund policy (if applicable).</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">9. Termination</h2>
              <div className="termination-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>We may suspend or terminate your account if you violate these terms.</p>
                <p>Upon termination, your stored images may be deleted according to our data retention policy.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">10. Disclaimers</h2>
              <div className="disclaimers-list space-y-3 text-[#1b1b1e] text-lg transition-colors duration-300">
                <p>We strive to provide secure and reliable services, but we cannot guarantee uninterrupted access.</p>
                <p>You use our services at your own risk.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">11. Limitation of Liability</h2>
              <p className="section-text text-[#1b1b1e] text-lg leading-relaxed transition-colors duration-300">
                To the fullest extent permitted by law, Image Locker is not liable for loss of data, revenue, or damages arising from use of the Service.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">12. Changes to Terms</h2>
              <p className="section-text text-[#1b1b1e] text-lg leading-relaxed transition-colors duration-300">
                We may update these Terms at any time. Continued use after changes means you accept the updated terms.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="section-title text-2xl font-semibold text-[#1b1b1e] mb-4 transition-colors duration-300">13. Governing Law</h2>
              <p className="section-text text-[#1b1b1e] text-lg leading-relaxed transition-colors duration-300">
                These Terms are governed by the laws of [Your Country/State].
              </p>
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

export default Terms;
