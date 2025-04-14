import React from "react";

const EmailInput = ({ email, onChange }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type="email"
        name="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        required
        value={email}
        onChange={onChange}
      />
      <label htmlFor="floatingInput">Email*</label>
    </div>
  );
};

export default EmailInput;
