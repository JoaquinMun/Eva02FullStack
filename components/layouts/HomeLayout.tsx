import FooterOrganism from "components/organisms/FooterOrganisms/contactoFO";
import HeaderOrganism from "components/organisms/HeaderOrganisms/Header";
import ProyectosSection from "components/organisms/Proyectos/cardsProyecto";
import React from "react";


const HomeLayout: React.FC = () => {
  return (
    <>
      <HeaderOrganism />
      <ProyectosSection/>
      <FooterOrganism/>
      <main style={{ padding: "20px",backgroundColor:"#030712" }}>
       
       </main>
    </>
  );
};

export default HomeLayout;
