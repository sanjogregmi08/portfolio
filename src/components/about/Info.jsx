import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Certifications</h3>
                <span className="about__subtitle"> Four Certificates, Pursuing </span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">7 + Projects</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>

        </div>
    );
}

export default Info;