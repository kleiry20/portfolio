import React from "react";
import "./Projects.css";
import { projectList } from "../../utils/ProjectList";

export const Projects = () => {
  return (
    <section className="section-break project-section">
      <h3 className="project-section-title">Projects</h3>
      <div className="projects-flex-container">
        {projectList.map((project) => {
          return (
            <a
              className="project-a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects-flex-item project-card">
                <a className="project-card-title">{project.title}</a>
                <p className="project-card-desc">{project.description}</p>

                <div className="project-stack">
                  <div className="project-stack-wrapper">
                    {project.skills.map((skill) => {
                      return (
                        <img
                          className="project-stack-icon"
                          src={skill}
                          alt="skill-icon"
                        />
                      );
                    })}
                  </div>
                  <button className="btn btn-arrow btn-background-slide">
                    View Project <span className="btn-arrow-icon">&rarr;</span>
                  </button>
                </div>
              </div>
            </a>
          );
        })}
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
