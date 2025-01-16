import React from "react";
import PropTypes from "prop-types";

const Carousel = ({ images, interval }) => {
  return (
    <section className="container-fluid carousel p-4">
      <h4 className="text-center">DEPOIMENTOS</h4>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide d-flex align-items-center"
        data-bs-ride="carousel"
      >
        {/* Indicadores */}
        <div className="carousel-indicators carousel-ind">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === 0 ? "true" : undefined}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner container-fluid d-flex align-items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={interval}
            >
              <img
                src={image.src}
                alt={image.alt || "Depoimento"}
                className="img-fluid grid-item"
              />
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev carousel-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carousel-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="false"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  interval: PropTypes.number,
};

Carousel.defaultProps = {
  interval: 5000,
};

export default Carousel;