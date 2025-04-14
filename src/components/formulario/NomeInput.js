import React from "react";

const NomeInput = ({ nome, sobrenome, onChange }) => {
  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="nome"
          className="form-control"
          id="floatingName"
          placeholder="Nome"
          value={nome}
          onChange={onChange}
        />
        <label htmlFor="floatingName" className="form-label">
          Nome
        </label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          name="sobrenome"
          className="form-control"
          id="floatingLname"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={onChange}
        />
        <label htmlFor="floatingLname" className="form-label">
          Sobrenome
        </label>
      </div>
    </div>
  );
};

export default NomeInput;
