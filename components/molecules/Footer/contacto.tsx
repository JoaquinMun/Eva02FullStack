import ContactInputs from "components/atoms/Anytings/selectinput";
import React from "react";


function Footerc() {
  return (
    <footer
      style={{
        backgroundColor: "#0b0f19",
        padding: "40px 0",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h3>Contacto</h3>
        <ContactoFooter />
      </div>

      <div style={{ marginTop: "40px", borderTop: "1px solid #ccc", paddingTop: "15px" }}>
        <p>©  Mi Sitio Web:P</p>
      </div>
    </footer>
  );
}

function ContactoFooter() {
  return (
    <div>
      <ContactInputs />
      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Enviar mensaje
      </button>
    </div>
  );
}

export default Footerc;
