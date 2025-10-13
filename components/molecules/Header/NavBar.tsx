import React from "react";
import { Layout, Button } from "antd";
import NavBarLinks from "../../atoms/Header/NavbarLinks";
import ButtonHea from "../../atoms/Header/btn";

const { Header } = Layout;

const NavBar: React.FC = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000",
        padding: "0 40px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>
        Joaquin Muñoz
      </div>

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <NavBarLinks />
      </div>

      <ButtonHea text="Descargar CV" />
    </Header>
  );
};

export default NavBar;