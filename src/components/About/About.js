import React, { forwardRef } from "react";
import "./style.scss";
import portrait from "../../images/portrait.jpg";

const Bio = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="about">
      <div className="blur-bg-text">
        <span className="unique-color">#</span> about me
      </div>
      <div className="container">
        <div className="bio__content-wrapper">
          <div className="bio__image-section">
            <div className="bio__image-wrapper">
              <div className="bio__image-title">Tuan Doan.</div>
              <div className="bio__image-bg">
                <img src={portrait} alt="portrait" />
              </div>
            </div>
          </div>
          <div className="bio__text-section">
            <div className="bio__text-wrapper">
              <h5>"I belive in luck. The harder I work, the luckier I am"</h5>
              <h2>
                Living in Helsinki, working as a Software Engineer, looking for{" "}
                <span className="unique-color">challenges.</span>
              </h2>
              <p>
                I have always wanted to see the impact of my work. And it should
                be something meaningful and helpful. Instantly I am hooked by
                programming. It provided everything I needed: the challenges,
                the thrill and rewarding feelings.
                <br />
                I came to Finland to study IT in 2015 after completing my
                Bachelor in Business. I always appreciated that I landed a job
                and started my IT career in Europe.
                <br />
                Some side interests:
              </p>
              <div className="bio__text-box-wrapper">
                <div className="bio__text-box">
                  <div className="bio__box-icon">
                    <i className="fas fa-desktop"></i>
                  </div>
                  <h3>Web design</h3>
                  <p>
                    I love beautiul layouts, maybe because I started out as a
                    Frontend Dev. And I am learning how to design one. Being a
                    developer helps me to know what is in the scope.
                  </p>
                </div>
                <div className="bio__text-box">
                  <div className="bio__box-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3>SEO</h3>
                  <p>
                    Although SEO is not my regular main responsibility nowadays,
                    I have decent knowledge regarding how to make a website
                    afloat on the surface, and I am still learning more about it
                    everyday.
                  </p>
                </div>
                <div className="bio__text-box">
                  <div className="bio__box-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>Team player</h3>
                  <p>
                    Working alone might be easier, but working in a team is much
                    more efficient. I used to be project manager for some
                    projects at university and I really adore good teamwork.
                  </p>
                </div>
                <div className="bio__text-box">
                  <div className="bio__box-icon">
                    <i className="fas fa-hiking"></i>
                  </div>
                  <h3>Adventure</h3>
                  <p>
                    Exploring new thing is my hobby, in both professional and
                    personal aspect. I like to learn new things as much as
                    travelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Bio;
