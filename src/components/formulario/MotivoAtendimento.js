import React from "react";

const MotivoAtendimento = ({ motivoAtendimento, onChange }) => {
  return (
    <div className="mt-4">
      <label htmlFor="type">Qual o motivo principal do atendimento?*</label>
      <div className="container-radio p-2">
        {[
          "Contracepção",
          "Colocar DIU (Brasília)",
          "Colocar Implanon (Brasília)",
          "Colocar Implanon (São Paulo)",
          "SOP | ovário policístico",
          "Endometriose | adenomiose",
          "Emagrecimento | obesidade",
          "Outro",
        ].map((motivo) => (
          <label key={motivo} className="mt-1 mb-1">
            <input
              type="radio"
              name="motivoAtendimento"
              value={motivo}
              className="radio-input"
              required
              checked={motivoAtendimento === motivo}
              onChange={onChange}
            />
            <span>{motivo}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MotivoAtendimento;
