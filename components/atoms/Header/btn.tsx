import React from "react";
import { Button } from "antd";

const ButtonHea = ({ text = "Contact" }) => {
  return (
    <Button type="primary" shape="round" style={{ backgroundColor: "#1890ff", borderColor: "#1890ff", color: "#fff" }}>
      {text}
    </Button>
  );
};

export default ButtonHea;