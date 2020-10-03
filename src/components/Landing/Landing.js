import React from 'react';
import Events from '../Events/Events';
import NavSection from '../NavSection/NavSection';
import './Landing.css'


const Landing = () => {
    return (
        <div className="landing">
            <NavSection></NavSection>
            <Events></Events>
        </div>
    );
};

export default Landing;