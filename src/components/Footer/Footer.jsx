import React from "react";
import "./Footer.css";
import CoolCatsGIF from "../../assets/cool-cats-gif.gif";
import LinkedIn from "../../assets/linkedin-logo.svg";
import GitHub from "../../assets/github-logo.svg";
import Mail from "../../assets/email-logo.svg";
import Bento from "../../assets/bento-logo.svg"

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

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/anushka-21" target="_blank">
              <img
                className="footer-icon"
                src={LinkedIn}
                alt="linkedin"
              />
            </a>

            <a href="https://github.com/kleiry20" target="_blank">
              <img
                className="footer-icon"
                src={GitHub}
                alt="github"
              />
            </a>

            <a href="mailto:anushkasingh801@gmail.com" target="_blank">
              <img
                className="footer-icon"
                src={Mail}
                alt="mail"
              />
            </a>

            <a href="https://bento.me/anushka-21" target="_blank">
              <img
                className="footer-icon"
                src={Bento}
                alt="bento"
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
