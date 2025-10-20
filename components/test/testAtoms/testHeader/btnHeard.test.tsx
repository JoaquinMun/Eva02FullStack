import { render, screen } from "@testing-library/react";

import { Button } from "antd";
import ButtonHea from "components/atoms/Header/btn";

// Mock para evitar dependencias de Ant Design
jest.mock("antd", () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

describe("ButtonHea", () => {
  test("renderiza el texto correctamente", () => {
    render(<ButtonHea text="Enviar" />);
    expect(screen.getByText("Enviar")).toBeInTheDocument();
  });

  test("usa el texto por defecto 'Contact' si no se pasa prop", () => {
    render(<ButtonHea />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("aplica estilos personalizados", () => {
    render(<ButtonHea />);
    const button = screen.getByText("Contact");
    expect(button).toHaveStyle("background-color: #1890ff");
    expect(button).toHaveStyle("color: #fff");
  });
});
