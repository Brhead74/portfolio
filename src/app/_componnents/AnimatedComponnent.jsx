import React from 'react';
import './AnimatedComponnent.css';

const AnimatedComponent = () => {
    return (
        <div className="animation-container">
            <div className="rotating-background">
                <div className="image-container">
            <img src="me_realist.png" alt="Centerpiece" className="centerpiece" />
                </div>
            </div>
            <h1 className="animated-text">MAXIME.C</h1>
        </div>
    );
};

export default AnimatedComponent;
