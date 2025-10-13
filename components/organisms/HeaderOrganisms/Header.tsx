import ProfileCard from "components/molecules/Header/DescriptionProfile";
import NavBar from "components/molecules/Header/NavBar";
import React from "react";


const HeaderOrganism: React.FC = () => {
  return (
    <header style={{background:"#030712"}} >
      <NavBar />
      <ProfileCard />

    </header>
  );
};

export default HeaderOrganism;

