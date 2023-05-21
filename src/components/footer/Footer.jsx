import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                

                <div className="footer__social">
                
                    <a href="https://github.com/" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="ul uil-github-alt"></i>
                    </a>

                    <a href="https://www.facebook.com" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://twitter.com/" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <div >
                    <span className="footer__copy">&#169;All Rigths Reserved</span>
                    <span className="footer__desig">Designed &amp; Built by Sanjog Regmi</span>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;