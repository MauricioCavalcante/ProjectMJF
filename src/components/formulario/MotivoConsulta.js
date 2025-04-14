import React from "react";

const MotivoConsulta = ({ motivoConsulta, onChange }) => {
  return (
    <div className="mt-4">
      <label htmlFor="type">
        Deixe aqui um pequeno resumo do por quê você gostaria de uma consulta.
      </label>
      <textarea
        className="text-area form-control mt-1"
        name="motivoConsulta"
        placeholder="Escreva em poucas palavras o motivo."
        id="caixaTexto"
        value={motivoConsulta}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default MotivoConsulta;
