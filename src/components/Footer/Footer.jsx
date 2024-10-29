import React from "react";
import "./Footer.css";
import CoolCatsGIF from "../../assets/cool-cats-gif.gif";

export const Footer = () => {
  return (
    <section className="section-break footer">
      <div className="footer-top">
        <div className="footer-content">
          <div>
            <h3 className="footer-desc">let's work</h3>
            <h3 className="footer-desc-span">
              together
              <span>
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png"
                  alt="Handshake"
                  width="50"
                  height="50"
                  className="handshake-icon"
                />
              </span>
            </h3>
          </div>

          {/* <form className="contact-form" id="contact-form">
          <label for="first">Your First Name</label>
          <input
            type="text"
            placeholder="First"
            id="first"
            name="first"
            required
          />
          <label for="last">Your Last Name</label>
          <input
            type="text"
            placeholder="Last"
            id="last"
            name="last"
            required
          />

          <label for="email">Your Email</label>
          <input
            type="email"
            placeholder="you@email.com"
            id="first"
            name="first"
            required
          />
          <label for="message">Your message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Type your message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>  */}

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/anushka-21" target="_blank">
              <img
                className="footer-icon"
                src="./assets/linkedin-logo.svg"
                alt=""
              />
            </a>

            <a href="https://github.com/kleiry20" target="_blank">
              <img
                className="footer-icon"
                src="./assets/github-logo.svg"
                alt=""
              />
            </a>

            <a href="mailto:anushkasingh801@gmail.com" target="_blank">
              <img
                className="footer-icon"
                src="./assets/email-logo.svg"
                alt=""
              />
            </a>

            <a href="https://bento.me/anushka-21" target="_blank">
              <img
                className="footer-icon"
                src="./assets/bento-logo.svg"
                alt=""
              />
            </a>
          </div>
        </div>

        <img className="footer-img" src={CoolCatsGIF} alt="cool-cats" />
      </div>

      <div className="footer-mention">
        <p className="m-0 footer-p">
          Made with
          {/* <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png"
          alt="Heart on Fire"
          width="25"
          height="25"
          className="love"
        /> 
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/White%20Heart.webp"
          alt="White Heart"
          width="30"
          height="30"
        />  */}
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Two%20Hearts.webp"
            alt="Two Hearts"
            width="25"
            height="25"
            className="footer-hearts"
          />
          by
          <a className="footer-a" href="https://github.com/kleiry20">
            Anushka
          </a>
        </p>
      </div>
    </section>
  );
};
