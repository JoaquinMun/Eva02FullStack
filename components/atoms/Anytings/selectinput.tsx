import React from "react";

function ContactInputs() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contáctame</h2>

      <div>
        <label htmlFor="proyecto">¿De qué trata su proyecto?</label>
        <br />
        <input
          id="proyecto"
          type="text"
          placeholder="que tiene en mente?"
          style={{ margin: "8px 0", padding: "8px", width: "250px" }}
        />
      </div>

      <div>
        <label htmlFor="correo">Su correo electrónico</label>
        <br />
        <input
          id="correo"
          type="email"
          placeholder="usted@ejemplo.com"
          style={{ margin: "8px 0", padding: "8px", width: "250px" }}
        />
      </div>
    </div>
  );
}

export default ContactInputs;
