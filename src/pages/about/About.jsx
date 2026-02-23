import { FaDownload } from "react-icons/fa";
import Info from "../../components/Info.jsx";
import Stats from "../../components/Stats.jsx";
import CV from "../../assets/Kashif's-Cv.pdf";
import Skills from "../../components/Skills.jsx";
import { resume } from "../../data.jsx";
import ResumeItem from "../../components/ResumeItem.jsx";
import "./about.css";

function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h2 className="section__subtitle">Personal Infos</h2>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download CV{" "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h2 className="section__subtitle subtitle__center">My Skills</h2>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <div className="resume">
        <h2 className="section__subtitle subtitle__center">
          Experience & Education
        </h2>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
