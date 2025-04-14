import React from "react";

const TipoConsulta = ({ tipoConsulta, onChange }) => {
  return (
    <div>
      <label htmlFor="type">Você deseja:*</label>
      <div className="container-radio p-2">
        <label className="mt-1 mb-1">
          <input
            type="radio"
            name="tipoConsulta"
            value="Online"
            className="radio-input"
            required
            checked={tipoConsulta === "Online"}
            onChange={onChange}
          />
          <span>Consulta on-line</span>
        </label>
        <label className="mt-1 mb-1">
          <input
            type="radio"
            name="tipoConsulta"
            value="Presencial"
            className="radio-input"
            required
            checked={tipoConsulta === "Presencial"}
            onChange={onChange}
          />
          <span>Consulta presencialmente (Brasília)</span>
        </label>
      </div>
    </div>
  );
};

export default TipoConsulta;
