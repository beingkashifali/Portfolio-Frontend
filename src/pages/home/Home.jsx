import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
    <section className="home section grid">
      <img className="home__img" src={Profile} alt="Profile Image" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Kashif Ali.</span> <br />
            Web Developer
          </h1>
          <p className="home__description">
            I'm a Pakistan based web designer & front-end a developer focused on
            crafting clean & user-friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <Link to={"/about"} className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home;
