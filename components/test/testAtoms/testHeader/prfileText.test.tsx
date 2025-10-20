import { render, screen } from "@testing-library/react";
import ProfileText from "components/atoms/Header/textProfile";

describe("ProfileText", () => {
  test("renderiza el nombre correctamente", () => {
    render(<ProfileText />);
    expect(screen.getByText("Joaquin Muñoz")).toBeInTheDocument();
  });

  test("renderiza el subtítulo de estudiante", () => {
    render(<ProfileText />);
    expect(
      screen.getByText(/Estudiante de Ingeniero en Informática/i)
    ).toBeInTheDocument();
  });

  test("muestra el texto adicional cuando se pasa prop", () => {
    render(<ProfileText text="Desarrollador Frontend" />);
    expect(screen.getByText("Desarrollador Frontend")).toBeInTheDocument();
  });
});
