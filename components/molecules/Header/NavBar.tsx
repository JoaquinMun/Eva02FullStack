import React from "react";
import { Layout, Button } from "antd";
import NavBarLinks from "../../atoms/Header/NavbarLinks";

const { Header } = Layout;

const NavBar: React.FC = () => {
  const handleOpen = () => {
    window.open(
      "https://docs.google.com/document/d/1_dGqivLsKb8dZ5WtZOAu63SOoRGF4bELk2yx3d3CjVs/edit?usp=sharing",
      "_blank"
    );
  };

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

      <Button type="primary" onClick={handleOpen}>
        Descargar CV
      </Button>
    </Header>
  );
};

export default NavBar;
