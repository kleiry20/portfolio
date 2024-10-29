import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="section-break project-section">
      <h3 className="project-section-title">Projects</h3>
      <div className="projects-flex-container">
        <div
          className="projects-flex-item project-card"
          onclick="openProject('crypto')"
        >
          <a className="project-card-title">Crypto Website</a>
          <p className="project-card-desc">
            This project replicates the UI of Intract's Academy tab. The page is
            divided into various sections consisting of uniquely designed
            components like cards and user journeys. Developed using ReactJs and
            CSS.
          </p>

          <div className="project-stack">
            <div className="project-stack-wrapper">
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=html&theme=dark"
                alt="html"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=css&theme=dark"
                alt="css"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=react&theme=dark"
                alt="react"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=vercel&theme=dark"
                alt="vercel"
              />
            </div>

            <button className="btn btn-arrow btn-background-slide">
              View Project <span className="btn-arrow-icon">&rarr;</span>
            </button>
          </div>
        </div>

        <div
          className="projects-flex-item project-card"
          onclick="openProject('ee')"
        >
          <a className="project-card-title">Event Management Website</a>
          <p className="project-card-desc">
            Turning the design into life with stunning pixel-perfect UI,
            animations, and responsive design for an event management website
            named Astrix.
          </p>
          <div className="project-stack">
            <div className="project-stack-wrapper">
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=html&theme=dark"
                alt="html"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=css&theme=dark"
                alt="css"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=react&theme=dark"
                alt="react"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=vercel&theme=dark"
                alt="vercel"
              />
            </div>

            <button className="btn btn-arrow btn-background-slide">
              View Project <span className="btn-arrow-icon">&rarr;</span>
            </button>
          </div>
        </div>

        <div
          className="projects-flex-item project-card"
          onclick="openProject('weather')"
        >
          <a className="project-card-title">Weather App</a>
          <p className="project-card-desc">
            Check real-time weather data for any city with a simple search.
            Innovative design and responsive layout with CSS Flexbox and Media
            Queries. Dashboard UI with weather forecasts, air conditions, and
            7-day forecasts. API data from OpenWeatherMap and QuoteGarden to
            enhance functionality and UX.
          </p>

          <div className="project-stack">
            <div className="project-stack-wrapper">
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=html&theme=dark"
                alt="html"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=css&theme=dark"
                alt="html"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=react&theme=dark"
                alt="html"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=vercel&theme=dark"
                alt="vercel"
              />
            </div>

            <button className="btn btn-arrow btn-background-slide">
              View Project <span className="btn-arrow-icon">&rarr;</span>
            </button>
          </div>
        </div>

        <div
          className="projects-flex-item project-card"
          onclick="openProject('apparel')"
        >
          <a className="project-card-title">Apparel Website</a>
          <p className="project-card-desc">
            Developed the UI/UX of Bewakoof’s website with semantic code and
            employed pure CSS and Flexbox concepts to create a visually
            appealing and responsive user interface.
          </p>
          <div className="project-stack">
            <div className="project-stack-wrapper">
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=html&theme=dark"
                alt="html"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=css&theme=dark"
                alt="css"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=bootstrap&theme=dark"
                alt="bootstrap"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=react&theme=dark"
                alt="react"
              />
            </div>

            <button className="btn btn-arrow btn-background-slide">
              View Project <span className="btn-arrow-icon">&rarr;</span>
            </button>
          </div>
        </div>

        <div
          className="projects-flex-item project-card"
          onclick="openProject('miscellaneous')"
        >
          <a className="project-card-title">Miscellaneous</a>
          <p className="project-card-desc">
            Continuous learning with practical challenges on platforms like
            HackerRank, GreatFrontend, JavaScript30 etc., sharing daily progress
            on GitHub.
          </p>
          <div className="project-stack">
            <div className="project-stack-wrapper">
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=javascript&theme=dark"
                alt="javascript"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=css&theme=dark"
                alt="css"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=github&theme=dark"
                alt="github"
              />
              <img
                className="project-stack-icon"
                src="https://skillicons.dev/icons?i=python&theme=dark"
                alt="python"
              />
            </div>

            <button className="btn btn-arrow btn-background-slide">
              View Project <span className="btn-arrow-icon">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="parrots">
          <img
            src="https://cultofthepartyparrot.com/flags/hd/iranparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/asyncparrot.gif"
            width="36"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/60fpsparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/jumpingparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/opensourceparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/dealwithitnowparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/hypnoparrotlight.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/databaseparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/fixparrot.gif"
            width="36"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/laptop_parrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/spinningparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/levitationparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/meldparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/slomoparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/moonwalkingparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/stableparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/scienceparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/pirateparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/footballparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/illuminatiparrot.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/hypnoparrotdark.gif"
            width="25"
            height="25"
          />
          <img
            src="https://cultofthepartyparrot.com/parrots/hd/mustacheparrot.gif"
            width="25"
            height="25"
          />
        </div>  */}
    </section>
  );
};
