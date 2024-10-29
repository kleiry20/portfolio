import React from "react";
import "./Experience.css";

export const Experience = () => {
  return (
    <section className="section-break experience-section">
      <div className="experience-first">
        <h3 className="experience-title">Work Experience</h3>
        <img
          className="experience-icon"
          src="https://user-images.githubusercontent.com/74038190/212284068-b4ee9a5c-331c-4d18-9481-53dd6b9debd5.gif"
          alt="code-the-cool-stuff"
          width="256"
        />
      </div>

      <div className="experience-wrapper">
        <div className="experience-item mb-2">
          <p className="timeline">Dec '22 - Oct '23</p>
          <div className="designation-wrapper">
            <p className="designation">
              Software Engineer
              <span>
                <img
                  className="designation-icon"
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Technologist.webp"
                  alt="Woman Technologist"
                  width="24"
                  height="24"
                />
              </span>
            </p>
            <p className="company">
              iVoyant Systems
              <span className="timeline-sm">Dec '22 - Oct '23</span>
            </p>

            <ul className="ul-wrapper">
              <li>
                Contributed significantly to building a
                <strong>Case Manager</strong> product from scratch. Worked
                closely with PM, BA, and UX throughout the
                <strong>requirement-gathering</strong> phase.
              </li>
              <li>
                Translated <strong>Figma</strong> designs into high-quality
                semantic code, creating around
                <strong>10+ reusable</strong> React components. Applied
                <strong>CSS Flexbox</strong> for layout design, resulting in
                pixel-perfect UI.
              </li>
              <li>
                Led <strong>feature development</strong> involving intricate
                flows spanning across <strong>5+ screens.</strong> Developed
                modular components, demonstrating proficiency in
                <strong>ReactJs, AntD, and Redux (State Management).</strong>
              </li>
              <li>
                Built a custom-rich WYSIWYG <strong>Text Editor</strong> using
                the <strong>React Quill</strong> library, incorporating over
                <strong>10+ features</strong>, enhancing the user experience.
              </li>
              <li>
                <strong>Tested</strong> and
                <strong>implemented 10+ CRUD APIs</strong> with
                <strong>Postman</strong> and <strong>RTK Query</strong>,
                ensuring seamless integration. Utilized
                <strong>Git/GitHub</strong> for effective team collaboration.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <p className="timeline">Sep '21 - Jan '22</p>
          <div className="designation-wrapper">
            <p className="designation">
              Web Development Intern
              <span className="ml-slight">
                <img
                  className="designation-icon"
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp"
                  alt="Laptop"
                  width="22"
                  height="22"
                />
              </span>
            </p>
            <p className="company">
              Leanpitch Technologies
              <span className="timeline-sm">Sep '21 - Jan '22</span>
            </p>

            <ul className="ul-wrapper">
              <li>
                Recreated the homepage of an event management website, having
                over <strong>10+ semantic sections</strong>.
              </li>
              <li>
                Revamped the components for the <strong>Pricing</strong> and
                <strong>Course Pages</strong>, and collaborated with UI/UX
                designers to create visually stunning interfaces using
                <strong>ReactJs</strong>.
              </li>
              <li>
                Expanded technical knowledge by learning about
                <strong>Python</strong> and <strong>APIs</strong>, culminating
                in a basic <strong>CRUD Django</strong> project, showcasing
                flexibility and versatility in backend development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
