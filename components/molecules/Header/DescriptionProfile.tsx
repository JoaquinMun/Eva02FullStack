import SectionText from "components/atoms/Anytings/selectText";
import ProfileImage from "components/atoms/Header/Image";
import ProfileText from "components/atoms/Header/textProfile";
import React from "react";

import sqlLogo from "/assets/sqlLogo.png";
import pythonLogo from "/assets/pythonLogo.png";
import javaLogo from "/assets/javaLogo.png";
import jsLogo from "/assets/jsLogo.png";
import cppLogo from "/assets/cppLogo.png";
import htmlLogo from "/assets/htmlLogo.png";
import kotlinLogo from "/assets/kotlinLogo.png";
import scrumLogo from "/assets/scrumLogo.png";

const ProfileCard = () => {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        color: "#f0f0f0",
        backgroundColor: "#0b0f19",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
          maxWidth: "850px",
          margin: "0 auto 30px auto",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <ProfileImage />
        <ProfileText
          text={
            "Estudiante de Ingeniería en Informática con formación en redes y programación. Busco seguir desarrollándome profesionalmente en entornos tecnológicos, destacando por compromiso, adaptabilidad y trabajo en equipo."
          }
        />
      </div>

     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
       
        <div
          style={{
            background: "linear-gradient(135deg, #111827, #1f2937)",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <h3 style={{ color: "#3b82f6", marginBottom: "10px" }}>
            Experiencia Laboral
          </h3>
          <p style={{ whiteSpace: "pre-line", color: "#d1d5db", lineHeight: "1.6" }}>
            <strong style={{ color: "#60a5fa" }}>Deira-ING — 2025</strong>{"\n"}
            <em>Reemplazo Técnico / Profesor en Impresión 3D (U. Mayor)</em>{"\n"}
            Encargado del laboratorio de impresoras 3D, realizando soporte,
            mantenimiento y capacitación durante el periodo de reemplazo del técnico principal.{"\n\n"}
            <strong style={{ color: "#60a5fa" }}>Deira-ING — 2024</strong>{"\n"}
            <em>Ayudante Técnico en Redes</em>{"\n"}
            Instalación y mantención de redes, puntos eléctricos y soporte técnico
            en sistemas de impresión 3D.
          </p>
        </div>

       
        <div
          style={{
            background: "linear-gradient(135deg, #111827, #1f2937)",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <h3 style={{ color: "#3b82f6", marginBottom: "10px" }}>Skills</h3>
          <SectionText
            skills={[
              { name: "SQL", image: sqlLogo },
              { name: "Python", image: pythonLogo },
              { name: "Java", image: javaLogo },
              { name: "JavaScript", image: jsLogo },
              { name: "C++", image: cppLogo },
              { name: "HTML", image: htmlLogo },
              { name: "Kotlin", image: kotlinLogo },
              { name: "Scrum Master", image: scrumLogo },
            ]}
          />
        </div>

     
        <div
          style={{
            background: "linear-gradient(135deg, #111827, #1f2937)",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <h3 style={{ color: "#3b82f6", marginBottom: "10px" }}>Educacion</h3>
          <p style={{ whiteSpace: "pre-line", color: "#d1d5db", lineHeight: "1.6" }}>
            <strong style={{ color: "#60a5fa" }}>Insuco Diego Portales</strong>{"\n"}
            2019 - 2024{"\n"}
            Técnico en Conectividad y Redes{"\n"}
            <strong style={{ color: "#60a5fa" }}>DUOC UC</strong>{"\n"}
            En curso{"\n"}
            Ingeniería en Informática
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
