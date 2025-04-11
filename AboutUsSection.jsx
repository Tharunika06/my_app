import { useState } from 'react';

export default function AboutUsSection() {
  const [activeYear, setActiveYear] = useState('2023');
  
  const timelineContent = {
    '2021': 'Inception - Launched our initial store with a limited menu focusing on quality over quantity.',
    '2022': 'Growth - Expanded our menu and received our first recognition for culinary excellence.',
    '2023': 'Innovation - Introduced new flavors and sustainable practices in our kitchen.',
    '2024': 'Expansion - Opened our second location and launched catering services.'
  };
  
  return (
    <div className="about-us-container">
      {/* Header Navigation */}
      <div className="nav-container">
        <div className="nav-left">
          <button className="shop-button">Shop</button>
          <span className="nav-link">About Us</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="logo-container">
          <div className="logo">BOXED</div>
        </div>
        <div className="nav-right">
          <button className="reserve-button">Reserve my table</button>
          <div className="icon-container">
            <div className="icon">🔍</div>
            <div className="icon">👤</div>
            <div className="icon">🛒</div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">WHO WE ARE</h1>
          <p className="hero-subtitle">Where Gourmet Treats Meet<br />Unforgettable Moments!</p>
          <button className="know-more-button">KNOW MORE</button>
          <div className="cup-illustration">☕</div>
        </div>
        <div className="hero-image">
          <img
            src="https://th.bing.com/th/id/R.eab7335d1c0902ee0e6629c81c606797?rik=w4XayUnnahWhsQ&riu=http%3a%2f%2fwww.academyfor1staid.ca%2fwp-content%2fuploads%2f2020%2f03%2ffoodh-1024x576.jpg&ehk=lP4BFEUiiyPvAWx97c7FYb0m8YoRdvp1J2dz8vTO9tQ%3d&risl=&pid=ImgRaw&r=0"
            alt="Culinary Team"
          />
        </div>
      </div>

      {/* What Makes Us Special */}
      <div className="special-section">
        <div className="special-content">
          <h2 className="special-title">WHAT MAKES US SPECIAL</h2>
          <p className="special-description">
            Boxed by Butterquennelle: Joyful treats, sustainable commitment. Innovative flavors, crafted excellence.
            Join our delicious journey for happiness with every bite.
          </p>
          <div className="values-diagram">
            <div className="value-bubble flavors">Flavors</div>
            <div className="value-bubble innovative">Innovative<br />Flavors</div>
            <div className="value-bubble joyful">Joyful<br />Indulgence</div>
            <div className="value-bubble extraordinary">Extraordinary<br />Taste</div>
            <div className="value-bubble delicious">Delicious<br />Adventure</div>
            <div className="value-center">Craftsmanship<br />Commitment</div>
          </div>
        </div>
        <div className="special-image">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
            alt="Restaurant Interior"
          />
        </div>
      </div>

      {/* Our Journey */}
      <div className="journey-section">
        <h2 className="section-title">OUR JOURNEY</h2>

        <div className="timeline-images">
          <img src="https://picsum.photos/150/100?random=1" alt="2021" />
          <img src="https://picsum.photos/150/100?random=2" alt="2022" />
          <img src="https://picsum.photos/150/100?random=3" alt="2023" />
        </div>

        <div className="timeline-years">
          {Object.keys(timelineContent).map((year) => (
            <div
              key={year}
              className={`year-item ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </div>
          ))}
        </div>

        <div className="timeline-content">
          <p>{timelineContent[activeYear]}</p>
        </div>
      </div>

      {/* Mission */}
      <div className="mission-section">
        <div className="mission-container">
          <h2 className="section-title">MISSION</h2>
          <div className="mission-content">
            <p>
              To create exceptional dining experiences through thoughtfully crafted dishes that celebrate the art of flavors. 
              We aim to bring joy and delight with every bite while maintaining our commitment to quality and sustainability.
            </p>
            <div className="mission-images">
              <img src="https://picsum.photos/150/100?random=4" alt="Store Front" />
              <img src="https://picsum.photos/150/100?random=5" alt="Interior" />
            </div>
          </div>
        </div>
      </div>

      {/* Founder Message */}
      <div className="founder-section">
        <h2 className="section-title">MESSAGE FROM OUR FOUNDER</h2>
        <div className="founder-content">
          <div className="quote-marks">"</div>
          <p className="founder-message">
            As the founder of Butterquennelle, I started with a simple idea: create a space where food brings joy. 
            Through our commitment to excellence, we've built more than just a restaurant – we've created a community. 
            Thank you for being part of our journey.
          </p>
          <div className="quote-marks closing-quote">"</div>
          <p className="founder-name">HARINI</p>
          <p className="founder-title">FOUNDER</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-icons">
          <div className="footer-icon">👋</div>
          <div className="footer-icon">💬</div>
          <div className="footer-icon">{"</>"}</div>
        </div>
      </div>
    </div>
  );
}
