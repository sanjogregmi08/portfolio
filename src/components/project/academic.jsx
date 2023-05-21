import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import "./project.css";
import image1 from "../../assets/academic/game_booking.jpg";
import image2 from "../../assets/academic/technova.jpg";
import image3 from "../../assets/academic/hospital.jpg";
import image4 from "../../assets/academic/mobile.jpg";
import image5 from "../../assets/academic/quiz.png";

function Academic(props) {
  const { title, image, description, demo, source, languages } = props;

  return (
    <div className="project-card">
      <div className="centered-container">
        <h2>{title}</h2>
        <img className="image" src={image} alt={title} />
        
        <div className="tags-container">
          {languages.map((language, index) => (
            <span className="tag"  key={index}>
              <i className="bx bx-cross"></i> <span> </span>{language}
              </span>
          ))}
        </div>

        <a href={demo} className="button">Watch Demo</a>
        <a href={source} className="button" title="Source Code"><i className="ul uil-github"></i></a>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}



function AcademicProject() {
  const projects = [
    {
      title: "Game Marketplace Platform in Django",
      image: image1,
      description: "This project aims to create a game buying system using Django. It will feature user registration and authentication, a game catalog, search and filtering options, a shopping cart and checkout system, user reviews and ratings, a seller dashboard, and an admin panel. The project will deliver a secure, user-friendly marketplace for buying and selling video games, offering a streamlined experience for gamers and an efficient sales platform for developers.",
      demo: "http://demo_link.com",
      source: "https://github.com/Sanjogregmi912/Game_booking_system",
      languages: ["Python", "Django","SQL","HTML","CSS","JavaScript","Bootstrap",],
    },
    {
      title: "Technova E-commerce Platform in Django",
      image: image2,
      description: "This project aims to develop a Django-based e-commerce platform for Technova that facilitates the buying and selling of computer parts. Features will include user authentication, a product catalog, a search and filtering system, a shopping cart and secure checkout process, and an admin panel. The end product will provide a seamless online shopping experience for customers and a robust sales and management platform for Technova.",
      demo: "http://demo_link.com",
      source: "https://github.com/Sanjogregmi912/technova",
      languages: ["Python", "Django","SQL","HTML","CSS","JavaScript","Bootstrap",],
    },
    {
      title: "Java Swing-Based Hospital Management System",
      image: image3,
      description: "The goal of this project is to develop a Hospital Management System using Java Swing. This system will streamline hospital operations including patient registration, appointment scheduling, medical record management, staff management, and billing processes. The end product will enhance operational efficiency, improve patient care, and facilitate overall hospital administration.",
      demo: "https://public.tableau.com/app/profile/sanjog.regmi",
      source: "https://github.com/Sanjogregmi912/HospitaL_management_system",
      languages: ["Java", "Swing","SQL"],
    },
    {
      title: "Downwork Freelancer Portal in Flutter",
      image: image4,
      description: "This project involves developing a mobile application for the Downwork Freelancer Portal using Flutter. The app will feature user registration, job posting, bidding, secure messaging, and payment systems. The goal is to create a user-friendly platform that connects freelancers with potential clients, facilitating seamless job searching, communication, and transaction processes.",
      demo: "http://demo_link.com",
      source: "https://github.com/stw300cem/final-assignment-Sanjogregmi912",
      languages: ["Dart", "Flutter","Node","Firebase"],
    },
    {
      title: "Java Swing-Based Quiz System",
      image: image5,
      description: "This project aims to develop a Quiz System using Java Swing. Key features will include user registration, quiz creation, a question-answer interface, score calculation, and leaderboard display. The system will offer a dynamic and interactive platform for users to participate in quizzes, with an efficient management interface for quiz administrators.",
      demo: "http://demo_link.com",
      source: "https://github.com/Sanjogregmi912/quiz_system",
      languages: ["Java", "Swing","SQl"],
    },
    // Add more projects with their respective language tags...
  ];
  const settings = {
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 2500   ,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <section className="portfolio section" id="Portfolio">
      <div className="portfolio">
        <h3 className="subtitle">Here are some of my recent Academic Projects</h3>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Academic
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              demo={project.demo}
              source={project.source}
              languages={project.languages}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AcademicProject;
