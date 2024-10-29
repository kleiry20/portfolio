import React from "react";
import "./Skills.css";

export const Skills = () => {
  return (
    <section className="section-break skills-section">
      <h3 className="skills-title">
        Skills
        <span>
          <img
            className="skills-title-emoji"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Face%20With%20Open%20Mouth.webp"
            alt="Face With Open Mouth"
            width="25"
            height="25"
          />
        </span>
      </h3>
      <div className="skills-wrapper mb-4">
        <img
          className="skills skills-rotate-right"
          src="https://skillicons.dev/icons?i=html&theme=dark"
          alt="html"
          title="HTML"
        />
        <img
          className="skills skills-rotate-left"
          src="https://skillicons.dev/icons?i=css&theme=dark"
          alt="css"
          title="CSS"
        />
        <img
          className="skills skills-rotate-right"
          src="https://skillicons.dev/icons?i=javascript&theme=dark"
          alt="javascript"
          title="JavaScript"
        />
        <img
          className="skills skills-rotate-left"
          src="https://skillicons.dev/icons?i=bootstrap&theme=dark"
          alt="bootstrap"
          title="Bootstrap"
        />
        <img
          className="skills skills-rotate-right"
          src="https://skillicons.dev/icons?i=react&theme=dark"
          alt="react"
          title="React"
        />
        <img
          className="skills skills-rotate-left"
          src="https://skillicons.dev/icons?i=redux&theme=dark"
          alt="redux"
          title="Redux"
        />
        <img
          className="skills skills-rotate-right"
          src="https://skillicons.dev/icons?i=python&theme=dark"
          alt="python"
          title="Python"
        />
        <img
          className="skills skills-rotate-left"
          src="https://skillicons.dev/icons?i=postman&theme=dark"
          alt="postman"
          title="Postman"
        />
        <img
          className="skills skills-rotate-right"
          src="https://skillicons.dev/icons?i=typescript&theme=dark"
          alt="typescript"
          title="TypeScript"
        />
        <img
          className="skills skills-rotate-left"
          src="https://skillicons.dev/icons?i=github&theme=dark"
          alt="github"
          title="GitHub"
        />
        <img
          className="skills skills-rotate-right"
          src="https://skillicons.dev/icons?i=vscode&theme=dark"
          alt="vscode"
          title="VS Code"
        />
      </div>
    </section>
  );
};
