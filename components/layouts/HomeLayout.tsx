import HeaderOrganism from "components/organisms/HeaderOrganisms/Header";
import React from "react";


const HomeLayout: React.FC = () => {
  return (
    <>
      <HeaderOrganism />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to my portfolio</h1>
      </main>
    </>
  );
};

export default HomeLayout;
