import React from "react";
import { Menu } from "antd";

const NavBarLinks = () => {
  return (
    <Menu
      mode="horizontal"
      style={{ backgroundColor: "#000", color: "#1890ff", fontSize: "16px", fontFamily: "Arial" }}
      items={[
        { key: "2", label: "Prueba" },
      ]}
      defaultSelectedKeys={['1']}
    />
  );
};

export default NavBarLinks;