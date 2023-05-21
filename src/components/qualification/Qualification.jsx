import React from 'react';
import { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState (1);

    const toggleTabe = (index) => {
        setToggleState (index);
    }


    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>


            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    } onClick={() => toggleTabe(1)}>
                        <i className="uil uil-graduation-cap 
                        qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    } onClick={() => toggleTabe(2)}>
                        <i className="uil uil-briefcase-alt 
                        qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? 
                    "qualification__content qualification__content-active" 
                    : "qualification__content"
                    }>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor</h3>
                                <span className="qualification__subtitle">Softwarica College of IT and e-commerce</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                     2021- present
                                </div>
                            </div>

                            <div>
                                <spane className="qualification__rounder"></spane>
                                <spane className="qualification__line"></spane>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <spane className="qualification__rounder"></spane>
                                <spane className="qualification__line"></spane>
                            </div>


                            <div>
                                <h3 className="qualification__title">Full Stack Developer Intern</h3>
                                <span className="qualification__subtitle">ICT Nepal</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                     2020 - 2021
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Pentagon International College</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                     2018 - 2020
                                </div>
                            </div>

                            <div>
                                <spane className="qualification__rounder"></spane>
                                <spane className="qualification__line"></spane>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            

                        </div>

                    </div>

                    
                </div>
            </div>
        </section>
    );
}

export default Qualification;