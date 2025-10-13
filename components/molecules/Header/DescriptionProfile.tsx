import SectionText from "components/atoms/Anytings/selectText";
import ProfileImage from "components/atoms/Header/Image";
import ProfileText from "components/atoms/Header/textProfile";
import React from "react";


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
          margin: "0 auto",
         
        }}
      >
        <ProfileImage />
        <ProfileText text={"Estudiante de ingeniería buscando una oportunidad de empleo, sea o no relacionada con mi área de estudio. Me caracterizo por adaptabilidad a distintos entornos laborales y buena habilidad social. "} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between", //espacio entre los dos cuadros
          maxWidth: "800px",
          margin: "0 auto", // Centra 
          padding: "0 20px", // Añade un poco de espacio entre los 2
        }}
      >
        <SectionText title = "Experiencia laboral" text = {"Deira-ING\n2025\nReemplazo a tecnico/profesor en 3D (U mayor)\nReemplazo temporal del técnico\ny encargado del laboratorio de impresoras 3D\nen su periodo de vacaciones\nDeira-ing\n2024\n Ayudante Tecnico Redes\n Instalación y mantención de redes\nApoyo en instalación de puntos eléctricos\n Técnico de mantención y soporte en impresoras 3D\n Apoyo a estudiantes en el uso de impresora 3D,\nrevisando sus modelos 3D asegurando calidad (U MAYOR).   " }/> 
        <SectionText  title = "SKILLS" text = {"SQL\nPython\nJava\nJavaScript\nC++\nHTML\nKotlin\nScrum Master"}/>
        <SectionText  title = "Educacion" text = {"Insuco Diego Portales\n2019-2024\nConectividad y Redes\nDUOC UC\nCURSADO\nIngeneria en informatica"}/>
      
      </div>
    </div>
  );
};

export default ProfileCard;


