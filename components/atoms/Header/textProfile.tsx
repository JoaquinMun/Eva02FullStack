import React from "react";

const ProfileText = ({ text = "" }) => {
  return (
    <div>
      <h2 style={{ color: "#1890ff", fontSize: "24px", margin: "0 0 5px 0" }}>
        Joaquin Muñoz
      </h2>
      <p style={{ margin: "0" }}>
        <span style={{ color: "#033e97ff" }}>
          Ingeniero en Informática / Técnico en Conectividad y Redes
        </span>
        <br />
        <span style={{ color: "#666" }}>{text}</span>
      </p>
    </div>
  );
};

export default ProfileText;