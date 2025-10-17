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
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#030712",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "800px",
          margin: "0 auto 20px auto",
        }}
      >
        <ProfileImage />
        <ProfileText
          text={
            "Estudiante de ingeniería buscando una oportunidad de empleo, sea o no relacionada con mi área de estudio. Me caracterizo por adaptabilidad a distintos entornos laborales y buena habilidad social."
          }
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
          flexWrap: "wrap",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <SectionText
          title="Experiencia laboral"
          text={
            "Deira-ING\n2025\nReemplazo a técnico/profesor en 3D (U Mayor)\nReemplazo temporal del técnico y encargado del laboratorio de impresoras 3D en su periodo de vacaciones.\n\nDeira-ING\n2024\nAyudante Técnico Redes\nInstalación y mantención de redes.\nApoyo en puntos eléctricos y soporte en impresoras 3D."
          }
        />

        <SectionText
          title="SKILLS"
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

        <SectionText
          title="Educación"
          text={
            "Insuco Diego Portales\n2019-2024\nConectividad y Redes\n\nDUOC UC\nCursado\nIngeniería en Informática"
          }
        />
      </div>
    </div>
  );
};

export default ProfileCard;