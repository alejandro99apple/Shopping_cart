import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Plant Paradise</h1>
            <p>Welcome to our indoor plant nursery, where you can explore a diverse selection of beautiful and unique plants that will bring life and freshness to your home. Our dedicated team is here to help you find the perfect plants to suit your space and lifestyle. Join us on this green journey and discover the joy of nurturing your own indoor garden!</p>
            <Link to="/products">
                <button>Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;