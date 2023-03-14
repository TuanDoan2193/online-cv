import React, { forwardRef } from "react";
import "./style.scss";

const RulerBarSet = ({ title, width }) => (
  <>
    <div className="skills__ruler-title">{title}</div>
    <div className="skills__ruler-bar-wrapper">
      <div className={`skills__ruler-bar ${width}`}></div>
    </div>
  </>
);

const Skills = forwardRef((props, ref) => {
  const developerSkills = [
    { title: "HTML, CSS, Javascript", width: "w-95" },
    { title: "TS", width: "w-85" },
    { title: "Python", width: "w-80" },
    { title: "React", width: "w-90" },
    { title: "Vue, Svelte", width: "w-80" },
    { title: "Google Apps Script", width: "w-80" },
    { title: "MongoDB", width: "w-80" },
    { title: "Bootstrap, MUI, SCSS", width: "w-90" },
    { title: "GSAP", width: "w-70" },
  ];

  const designSkills = [
    { title: "Figma", width: "w-70" },
    { title: "Adobe XD", width: "w-70" },
  ];

  return (
    <div ref={ref} id="skills">
      <div className="container">
        <div className="skills__title-wrapper">
          <div className="skills__title">My skills</div>
          <div className="skills__description">
            Beside developer and design skills, I am quite good with writing
            documentation and creating presentations. Also, I am very familiar
            with common tools like Git, Trello, Jira etc.
          </div>
        </div>
        <div className="blur-bg-text">
          <span className="unique-color">#</span> skills
        </div>
        <div className="skills__content-wrapper">
          <div className="skills__label-wrapper">
            <div className="skills__label">
              <h3>Developer skills</h3>
              <span>
                Beside the stacks that I listed below, I am also quite
                interested in System Design. Even though it's not my main
                responsibility at work yet, I am still researching and learning
                about it frequently. Making application is one thing, but we
                also need to scale and maintain it in the right way.
              </span>
            </div>
          </div>
          <div className="skills__ruler-wrapper">
            <div className="skills__ruler-box">
              {developerSkills.map((skill, index) => (
                <RulerBarSet
                  title={skill.title}
                  width={skill.width}
                  key={index}
                ></RulerBarSet>
              ))}
            </div>
          </div>
          <div className="skills__label-wrapper">
            <div className="skills__label">
              <h3>Design skills</h3>
              <span>
                I have practiced designing for awhile. Usually I make layouts
                and draw vectors for my personal projects.
                <br />
                Recently I got to do a new theme for Dixi center's indoor map as
                my first real "live" work.
              </span>
            </div>
          </div>
          <div className="skills__ruler-wrapper">
            <div className="skills__ruler-box">
              {designSkills.map((skill, index) => (
                <RulerBarSet
                  title={skill.title}
                  width={skill.width}
                  key={index}
                ></RulerBarSet>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
