import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import "./project.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/project2.jpg";
import image3 from "../../assets/project3.jpg";
import image4 from "../../assets/project4.png";
import image5 from "../../assets/project5.png";


function Project(props) {
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



function Portfolio() {
  const projects = [
    {
        title: "Stock Market Prediction",
        image: image1,
        description: "The Stock Price Prediction project aimed to forecast the future prices of selected stocks using a combination of historical price data, technical indicators, and sentiment analysis of financial  news articles. By employing machine learning algorithms and natural language processing (NLP) techniques, the project provided insights into potential market trends and investment opportunities.",
        demo: "http://demo_link.com",
        source: "https://github.com/Sanjogregmi912/Stock-Prediction",
        languages : ["Python","Machine Learning","TensorFlow"]
      },
        {
        title: "Retail Data Analysis",
        image: image2,
        description: 'The Retail Data Analytics project aimed to provide valuable insights into customer behavior,optimize product assortments, and improve sales forecasting for a mid-sized retail company. Utilizing historical sales, customer demographics, and transaction data, the project focused on two main objectives: segmenting customers based on their purchasing patterns and predicting future sales using machine learning techniques.',
        demo: "http://demo_link.com",
        source: "https://github.com/Sanjogregmi912/AI_finalassignment",
        languages : ["Python", "MatplotLib","Seaborn"]
        },
        {
        title: "Supermarket Sales Performance Analysis",
        image: image3,
        description: "The Supermarket Sales Performance and Customer Insights Dashboard project aimed to provide an interactive and visually appealing platform for analyzing a supermarket's sales data, product performance, and customer behavior. Utilizing Tableau, the project transformed raw transactional data into actionable insights that could be used to optimize store operations, marketing strategies, and inventory management",
        demo: "https://public.tableau.com/app/profile/sanjog.regmi",
        source: "https://public.tableau.com/app/profile/sanjog.regmi",
        languages : ["Tableau"]

        },
        {
            title: " Web Crawler for Sentiment Analysis",
            image: image4,
            description: "The Mobile Reviews Web Crawler project aimed to gather customer reviews on various mobile devices from popular e-commerce platforms and tech review websites. By utilizing web scraping techniques and Python libraries, the project collected a comprehensive dataset of mobile reviews, which could be further analyzed using natural language processing (NLP)techniques to gain insights into customer satisfaction and preferences.",
            demo: "http://demo_link.com",
            source: "https://github.com/Sanjogregmi912/Web-Crawler",
            languages : ["Python","Beautiful Soup","Broswer Driver"]
            },
            {
              title: " House Price Prediction in R",
              image: image5,
              description: "This project aims to develop a predictive model in R for estimating house prices. The process involves data collection, preprocessing, exploratory data analysis, feature selection/engineering, model development, evaluation, and deployment. Various regression algorithms will be employed and evaluated for their accuracy. The final output will be a reliable tool for real-time house price predictions, benefiting real estate agents, buyers, and sellers.",
              demo: "http://demo_link.com",
              source: "https://github.com/Sanjogregmi912/Web-Crawler",
              languages : ["R","Machine Learrning"]
              },
  

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
      <h2 className="title">My Projects</h2>
      <h3 className="subtitle">Here are some of my recent projects on Machine Learning and Data Analyst</h3>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Project
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

export default Portfolio;
