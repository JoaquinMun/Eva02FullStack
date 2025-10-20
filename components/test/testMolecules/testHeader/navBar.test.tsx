import { render, screen } from "@testing-library/react";
import NavBar from "components/molecules/Header/NavBar";

// Mocks de los átomos
jest.mock("components/atoms/Header/NavbarLinks", () => () => <div>Mock NavBarLinks</div>);
jest.mock("components/atoms/Header/btn", () => ({ text }: any) => <button>{text}</button>);

describe("NavBar", () => {
  test("muestra el nombre del usuario", () => {
    render(<NavBar />);
    expect(screen.getByText("Joaquin Muñoz")).toBeInTheDocument();
  });

  test("renderiza los enlaces de navegación", () => {
    render(<NavBar />);
    expect(screen.getByText("Mock NavBarLinks")).toBeInTheDocument();
  });

  test("muestra el botón de 'Descargar CV'", () => {
    render(<NavBar />);
    expect(screen.getByText("Descargar CV")).toBeInTheDocument();
  });
});
