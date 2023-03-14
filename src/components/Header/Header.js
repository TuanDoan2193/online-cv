import React, { useState } from "react";
import "./style.scss";
import { useOnScreen } from "../../hooks/useOnScreen";

const Header = ({ allRefs }) => {
  const { headerRef, aboutRef, skillsRef, projectsRef } = allRefs;
  const isHeaderVisible = useOnScreen(headerRef);
  const isAboutVisible = useOnScreen(aboutRef);
  const isSkillsVisible = useOnScreen(skillsRef);
  const isProjectsVisible = useOnScreen(projectsRef);

  const handleNavClick = (ele, mobile) => {
    //Subtract the height of sticky header
    const position =
      ele.current.getBoundingClientRect().top + window.pageYOffset;
    //Smooth scroll to element position with offset
    if (mobile) setOpenMenu(!openMenu);
    window.scrollTo({
      behavior: "smooth",
      top: position,
    });
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div ref={headerRef}>
      <div className="left-nav">
        <div className="left-nav__logo-wrapper">
          <i className="fab fa-black-tie"></i>
        </div>
        <div className="left-nav__mobile-menu">
          <div
            className={openMenu ? "close menu-btn" : "menu-btn"}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>
        </div>
        <div className="left-nav__social">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TuanDoan2193"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/tuan-doan-161673105/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <a
          href="mailto:tuan.doan2193@gmail.com"
          className="left-nav__contact-wrapper"
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
      <div className="header">
        <nav className={openMenu ? "show menu" : "menu"}>
          <div className={openMenu ? "show menu-branding" : "menu-branding"}>
            <div className="portrait"></div>
          </div>
          <ul className={openMenu ? "show menu-nav" : "menu-nav"}>
            <li
              className={`${openMenu ? "show nav-item" : "nav-item"} ${
                isHeaderVisible ? "selected" : ""
              }`}
            >
              <div
                onClick={() => handleNavClick(headerRef, true)}
                className="nav-link"
              >
                Home
              </div>
            </li>
            <li
              className={`${openMenu ? "show nav-item" : "nav-item"} ${
                isAboutVisible && !isHeaderVisible ? "selected" : ""
              }`}
            >
              <div
                onClick={() => handleNavClick(aboutRef, true)}
                className="nav-link"
              >
                About
              </div>
            </li>
            <li
              className={`${openMenu ? "show nav-item" : "nav-item"} ${
                isSkillsVisible && !isAboutVisible ? "selected" : ""
              }`}
            >
              <div
                onClick={() => handleNavClick(skillsRef, true)}
                className="nav-link"
              >
                Skills
              </div>
            </li>
            <li
              className={`${openMenu ? "show nav-item" : "nav-item"} ${
                isProjectsVisible && !isSkillsVisible ? "selected" : ""
              }`}
            >
              <div
                onClick={() => handleNavClick(projectsRef, true)}
                className="nav-link"
              >
                Project
              </div>
            </li>
          </ul>
        </nav>
        <div className="header__scroll-nav">
          <ul>
            <li>
              <div
                className={`${isHeaderVisible ? "selected" : ""}`}
                onClick={() => handleNavClick(headerRef)}
              >
                home
              </div>
            </li>
            <li>
              <div
                className={`${
                  isAboutVisible && !isHeaderVisible ? "selected" : ""
                }`}
                onClick={() => handleNavClick(aboutRef)}
              >
                about
              </div>
            </li>
            <li>
              <div
                className={`${
                  isSkillsVisible && !isAboutVisible ? "selected" : ""
                }`}
                onClick={() => handleNavClick(skillsRef)}
              >
                skills
              </div>
            </li>
            <li>
              <div
                className={`${
                  isProjectsVisible && !isSkillsVisible ? "selected" : ""
                }`}
                onClick={() => handleNavClick(projectsRef)}
              >
                projects
              </div>
            </li>
          </ul>
        </div>
        <div className="header__content-wrapper">
          <div className="header__content-inner">
            <div className="header__content-box">
              <h1>
                Hello!
                <br />
                I'm Tuan Doan
                <br />
                a proactive Developer
                <br />
              </h1>
              <div onClick={() => handleNavClick(aboutRef)} className="button">
                See more
              </div>
            </div>
            <div className="header__left-bg">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="header__right-bg">
              <div className="header__right-bg-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
