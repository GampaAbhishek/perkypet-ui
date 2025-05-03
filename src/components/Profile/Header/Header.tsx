import React from 'react';
import './Header.css';

import ToyFox from "../../../assets/toyfox.png";
import Logo from "../../../assets/logo.png";
import Height from "../../../assets/breedheight.png";
import Weight from "../../../assets/breedweight.png";
import LifeExpectancy from "../../../assets/lifeexpectancy.png";
import Origin from "../../../assets/origin.png";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      {/* Navigation */}
      <header className="header-nav">
        <img src={Logo} alt="PerkyPet Logo" className="logo" />
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/benefits">Benefits</a>
          <a href="/pricing">Pricing</a>
        </nav>
        <button className="contact-btn">Contact</button>
      </header>

      {/* Main Content */}
      <main className="header-content">
        <section className="info-section">
          <a href="/" className="back-link">← Back to Breeds</a>
          <p className="traits">Alert / Intelligent / Friendly</p>
          <h1 className="breed-name">
            Toy Fox Terrier
          </h1>

          <div className="breed-stats">
            <Stat icon={Height} label="Height" value="10 to 15 inches" />
            <Stat icon={Weight} label="Weight" value="5.3–8.4 lbs" />
            <Stat icon={LifeExpectancy} label="Life Expectancy" value="12–15 years" />
            <Stat icon={Origin} label="Origin" value="Germany" />
          </div>
        </section>

        <div className="image-section">
          <img src={ToyFox} alt="Toy Fox Terrier" className="breed-image" />
        </div>
      </main>
    </div>
  );
};

interface StatProps {
  icon: string;
  label: string;
  value: string;
}

const Stat: React.FC<StatProps> = ({ icon, label, value }) => (
  <div className="stat-box">
    <img src={icon} alt={`${label} icon`} className="stat-icon" />
    <div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  </div>
);

export default Header;
