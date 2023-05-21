
import { useState } from "react";
import "./header.css"

const Header = () => {
/*=============== change bachgroun header ===============*/
      
      window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        /* Scrool-header Up is hight than 200  */
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
/*=============== Toggle ===============*/
    const [Toggle,ShowMenu ] = useState (false)
    const [activeNave, setActiveNave] = useState ("#home")

    return (
        <header className="header">
            <nav className="nav container">
               <a href="index.html" className="nav__logo"></a> 
                <div className={ Toggle ? "nav__menu show-menu" : "nav__menu" }>
                    <ul className="nav__list grid">
                        <li className="nav__item ">
                            <a href="#home" onClick={()=> setActiveNave("#home")} className={activeNave === "#home" ?
                            "nav__link active-link" : "nav__link"}> 
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#about" className="nav__link">  
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link"> 
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#Portfolio" className="nav__link"> 
                                <i className="uil uil-briefcase-alt nav__icon"></i> Project 
                            </a>
                        </li>

                        
                        <li className="nav__item">
                            <a href="#contact" className="nav__link"> 
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>

                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => ShowMenu(!Toggle)}></i>
                    
                   
                </div>
                <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            
            </nav>
        </header>
       
    );
}

export default Header;