import { useState } from "react";
import close from "../assets/close.svg";

function PortfolioItem({ img, title, details }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <div className="portfolio__item">
      <img className="portfolio__image" src={img} alt="Portfolio Image" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal" onClick={toggleModal}>
          <div className="portfolio__modal-content">
            <img
              className="modal__close"
              src={close}
              alt="Close Modal"
              onClick={toggleModal}
            />

            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>
                    <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} alt="Modal Image" className="modal__image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioItem;
