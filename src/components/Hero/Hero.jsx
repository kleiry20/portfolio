import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero-img.jpeg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <a
          className="name"
          href="mailto:anushkasingh801@gmail.com"
          target="_blank"
        >
          Anushka Singh
        </a>
        <a
          className="name"
          href="https://www.linkedin.com/in/anushka-21"
          target="_blank"
        >
          Developer
        </a>
      </div>

      <div className="hero-wrapper">
        <p className="hero-title slideRight">Learner &</p>
        <p className="hero-title slideLeft">enthusiast</p>
        <img className="hero-image zoom--fast" src={HeroImg} alt="hero-image" />
      </div>
    </section>
  );
};
