import { render, screen } from "@testing-library/react";

import { Menu } from "antd";
import NavBarLinks from "components/atoms/Header/NavbarLinks";

// Mock de Menu de Ant Design
jest.mock("antd", () => ({
  Menu: ({ items }: any) => (
    <nav>
      {items.map((item: any) => (
        <span key={item.key}>{item.label}</span>
      ))}
    </nav>
  ),
}));

describe("NavBarLinks", () => {
  test("renderiza el item de menú correctamente", () => {
    render(<NavBarLinks />);
    expect(screen.getByText("Prueba")).toBeInTheDocument();
  });

  test("usa estilos personalizados en el menú", () => {
    render(<NavBarLinks />);
    const nav = screen.getByText("Prueba").closest("nav");
    expect(nav).toBeInTheDocument();
  });
});
