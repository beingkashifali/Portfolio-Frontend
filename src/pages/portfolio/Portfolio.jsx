import { portfolio } from "../../data.jsx";
import PortfolioItem from "../../components/PortfolioItem.jsx";
import "./portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Projects</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Portfolio;
