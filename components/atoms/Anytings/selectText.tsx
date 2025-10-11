import React from "react";

const SectionText = ({ title = "Titulo", text = "pone texto" }) => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#030712",
        padding: "20px",
        whiteSpace: 'pre-wrap',
        borderRadius: "8px",
        margin: "20px 0",
        color: "#666",
      }}
    >
      <h3 style={{ fontSize: "20px", marginBottom: "10px", fontWeight: "500" }}>{title}</h3>
      <p style={{ fontSize: "14px", lineHeight: "1.5" }}>{text}</p>
    </div>
  );
};

export default SectionText;