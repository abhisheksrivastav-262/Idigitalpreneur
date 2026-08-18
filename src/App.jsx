import React, { useState, useEffect } from 'react';
import { 
  Menu, X, BookOpen, TrendingUp, Monitor, 
  Lightbulb, Target, DollarSign, CheckCircle, 
  Phone, MessagesSquare, ChevronRight, PlayCircle
} from 'lucide-react';
import VideoSlider from './components/VideoSlider';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', message: '' });

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const text = `*New Course Enquiry*\nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nCourse: ${selectedCourse}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/917376333742?text=${encodedText}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <span style={{ background: 'var(--primary)', color: 'white', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={24} /></span>
            <span style={{ fontSize: '1.4rem', fontWeight: '800' }}>Idigital<span style={{ color: 'var(--dark)' }}>preneur</span></span>
          </a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#courses" onClick={closeMenu}>Courses</a>
            <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Learn Skills. <span>Build Your Future.</span> Earn With Your Skills.</h1>
            <p>Idigitalpreneur helps you learn practical skills and understand how to turn knowledge into real earning opportunities.</p>
            <div className="hero-btns">
              <a href="#courses" className="btn btn-primary">Start Learning</a>
              <a href="#about" className="btn btn-secondary">Explore Courses</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-img.jpg" alt="Student learning online" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-container">
          <div className="about-image">
            <img src="/about-img.jpg" alt="Digital learning and skill development" />
          </div>
          <div className="about-content">
            <h2>Learn Skills With Earning</h2>
            <p>Idigitalpreneur is an education-based platform designed to help individuals develop useful skills and learn how those skills can create earning opportunities.</p>
            <p>We focus on practical education that empowers young entrepreneurs to build their future in the digital world. By understanding course selling and digital skills, you unlock your true potential.</p>
            <br/>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                <CheckCircle color="var(--secondary)" size={20} /> Practical Learning Approach
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                <CheckCircle color="var(--secondary)" size={20} /> Real-world Digital Opportunities
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                <CheckCircle color="var(--secondary)" size={20} /> Modern Skill Development
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Teach */}
      <section id="skills" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Skills That Can Create Opportunities</h2>
            <p>Discover the core areas we focus on to help you build a successful digital future.</p>
          </div>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon"><Monitor size={32} /></div>
              <h3>Digital Skills</h3>
              <p>Learn practical digital skills that can be applied in today's online world.</p>
            </div>
            <div className="card">
              <div className="card-icon"><TrendingUp size={32} /></div>
              <h3>Course Selling</h3>
              <p>Understand the fundamentals of selling educational courses and digital knowledge.</p>
            </div>
            <div className="card">
              <div className="card-icon"><BookOpen size={32} /></div>
              <h3>Online Learning</h3>
              <p>Learn through structured online courses and practical resources.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Lightbulb size={32} /></div>
              <h3>Entrepreneurship</h3>
              <p>Develop an entrepreneurial mindset and learn how to identify digital opportunities.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Target size={32} /></div>
              <h3>Sales & Marketing</h3>
              <p>Learn the fundamentals of presenting, promoting and selling digital education products.</p>
            </div>
            <div className="card">
              <div className="card-icon"><DollarSign size={32} /></div>
              <h3>Income Skills</h3>
              <p>Understand how valuable skills can be developed into potential earning opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            <p>A simple, structured path to developing your abilities.</p>
          </div>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-icon"><PlayCircle size={40} /></div>
              <h3>Learn</h3>
              <p>Learn practical and valuable skills through structured courses.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-icon"><Monitor size={40} /></div>
              <h3>Practice</h3>
              <p>Apply what you learn and improve your skills through practical experience.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-icon"><TrendingUp size={40} /></div>
              <h3>Earn</h3>
              <p>Use your skills to explore income-generating opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-title">
            <h2>Explore Our Learning Programs</h2>
            <p>Choose from our carefully curated programs designed for your success.</p>
          </div>
          
          <div className="course-cards">
            <div className="course-card">
              <div className="course-img">
                <img src="/src/assets/c.png" alt="Digital Skills Program" />
              </div>
              <div className="course-content">
                <h3>Digital Skills Program</h3>
                <p>Master the essential digital tools and concepts required for online business success.</p>
                <button className="btn btn-primary" onClick={(e) => {
                  const title = e.currentTarget.parentElement.querySelector('h3').innerText;
                  handleLearnMore(title);
                }}>Learn More <ChevronRight size={18} style={{marginLeft: '5px'}} /></button>
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-img">
                <img src="/src/assets/c1.png" alt="Course Selling Program" />
              </div>
              <div className="course-content">
                <h3>Course Selling Program</h3>
                <p>Learn the proven strategies to effectively market and sell educational products.</p>
                <button className="btn btn-primary" onClick={(e) => {
                  const title = e.currentTarget.parentElement.querySelector('h3').innerText;
                  handleLearnMore(title);
                }}>Learn More <ChevronRight size={18} style={{marginLeft: '5px'}} /></button>
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-img">
                <img src="/src/assets/c2.png" alt="Skill Development Program" />
              </div>
              <div className="course-content">
                <h3>Skill Development Program</h3>
                <p>Build a strong foundation of high-value skills to elevate your career and income.</p>
                <button className="btn btn-primary" onClick={(e) => {
                  const title = e.currentTarget.parentElement.querySelector('h3').innerText;
                  handleLearnMore(title);
                }}>Learn More <ChevronRight size={18} style={{marginLeft: '5px'}} /></button>
              </div>
            </div>

            <div className="course-card">
              <div className="course-img">
                <img src="/src/assets/c3.png" alt="Digital Skills Program" />
              </div>
              <div className="course-content">
                <h3>Digital Skills Program</h3>
                <p>Advanced digital skills training designed to help you succeed in today's competitive online landscape.</p>
                <button className="btn btn-primary" onClick={(e) => {
                  const title = e.currentTarget.parentElement.querySelector('h3').innerText;
                  handleLearnMore(title);
                }}>Learn More <ChevronRight size={18} style={{marginLeft: '5px'}} /></button>
              </div>
            </div>

            <div className="course-card">
              <div className="course-img">
                <img src="/src/assets/c4.png" alt="Course Selling Program" />
              </div>
              <div className="course-content">
                <h3>Course Selling Program</h3>
                <p>Comprehensive training programs focused on actionable skills that drive real-world results.</p>
                <button className="btn btn-primary">Learn More <ChevronRight size={18} style={{marginLeft: '5px'}} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Overview Section */}
      <VideoSlider />

      {/* Why Choose Us */}
      <section className="why-choose" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Idigitalpreneur</h2>
            <p>Join a community committed to practical learning and real growth.</p>
          </div>
          
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {['Practical Skill Development', 'Easy-to-Understand Learning', 'Online Learning', 'Business & Digital Skills', 'Course Selling Knowledge', 'Learn With Purpose', 'Skill-to-Income Mindset'].map((benefit, index) => (
              <div key={index} style={{ padding: '1.5rem', background: 'var(--light)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '600' }}>
                <CheckCircle color="var(--primary)" size={24} />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Your Skills Can Become Your Opportunity.</h2>
            <p>Start learning today and take the first step toward building valuable skills for your future.</p>
            <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Start Your Learning Journey</button>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Start Your Journey</h2>
            <p>Fill out the form below and our team will get back to you shortly.</p>
          </div>
          <div className="contact-container" style={{ maxWidth: '750px', padding: '3rem', margin: '0 auto', background: 'white', borderRadius: '20px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)', border: '1px solid #f1f5f9' }}>
            <form onSubmit={handleEnquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>Full Name *</label>
                  <input type="text" required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '1rem', boxSizing: 'border-box' }} placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>Mobile Number *</label>
                  <input type="tel" required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '1rem', boxSizing: 'border-box' }} placeholder="Your Phone Number" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>Email Address</label>
                  <input type="email" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '1rem', boxSizing: 'border-box' }} placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>Select Course *</label>
                  <select required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '1rem', background: 'white', boxSizing: 'border-box' }} value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
                    <option value="" disabled>Select a program</option>
                    <option value="Digital Skills Program">Digital Skills Program</option>
                    <option value="Course Selling Program">Course Selling Program</option>
                    <option value="Skill Development Program">Skill Development Program</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>Message (Optional)</label>
                <textarea rows="4" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box' }} placeholder="Any questions or specific requirements?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem', borderRadius: '10px', marginTop: '0.5rem' }}>Submit Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="contact-container">
            <div className="section-title" style={{ marginBottom: '2rem' }}>
              <h2>Get In Touch</h2>
              <p>Ready to start your journey? Contact us today.</p>
            </div>
            
            <div className="contact-info">
              <h3>Subodh Kumar</h3>
              <p>Founder, Idigitalpreneur</p>
              <a href="tel:7376333742" className="contact-phone">7376333742</a>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:7376333742" className="btn btn-primary">
                <Phone size={20} style={{marginRight: '8px'}} /> Call Now
              </a>
              <a href="https://wa.me/917376333742" target="_blank" rel="noreferrer" className="btn btn-dark" style={{ backgroundColor: '#25D366' }}>
                <MessagesSquare size={20} style={{marginRight: '8px'}} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginBottom: '1rem' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.4rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={24} /></span>
                <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'white' }}>Idigitalpreneur</span>
              </a>
              <p>Learning Skills With Earning</p>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Contact Us</h4>
              <ul>
                <li>Subodh Kumar</li>
                <li><a href="tel:7376333742">Call: 7376333742</a></li>
                <li><a href="https://wa.me/917376333742">WhatsApp: 7376333742</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 Idigitalpreneur. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 1000 }}>
        <a href="tel:7376333742" className="btn" style={{ background: 'white', color: 'var(--primary)', width: '56px', height: '56px', borderRadius: '50%', padding: 0, boxShadow: '0 10px 25px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }} aria-label="Call Now">
          <Phone size={24} />
        </a>
        <a href="https://wa.me/917376333742" target="_blank" rel="noreferrer" className="btn" style={{ background: '#25D366', color: 'white', width: '56px', height: '56px', borderRadius: '50%', padding: 0, boxShadow: '0 10px 25px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Chat on WhatsApp">
          <MessagesSquare size={24} />
        </a>
      </div>
    </div>
  );
}

export default App;
