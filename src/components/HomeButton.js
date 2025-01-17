import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <Link
        to="/lista-de-espera"
        className="button-home"
        role="button"
      >
        <strong>Entrar na lista de espera</strong>
      </Link>
    </div>
  );
};

export default HomeButton;