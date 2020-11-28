import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}  <span className="heart-emoji">👨🏼‍🔬</span></h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjects.projects.map((project) => {
                return (
                  <div
                    className="saaya-health-div"
                    onClick={() => openProjectInNewWindow(project.link)}
                  >
                    <div className="startup-project-image"><img alt="Projects" src={project.image} /></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
