import { render, screen } from "@testing-library/react";
import Footerc from "components/molecules/Footer/contacto";


// Mock del componente hijo
jest.mock("components/atoms/Anytings/selectinput", () => () => (
  <input placeholder="Mock Contact Input" />
));

describe("Footerc", () => {
  test("renderiza el título de contacto", () => {
    render(<Footerc />);
    expect(screen.getByText("Contacto")).toBeInTheDocument();
  });

  test("renderiza el botón de enviar mensaje", () => {
    render(<Footerc />);
    expect(screen.getByText("Enviar mensaje")).toBeInTheDocument();
  });

  test("renderiza el texto del pie de página", () => {
    render(<Footerc />);
    expect(screen.getByText(/Mi Sitio Web/i)).toBeInTheDocument();
  });

  test("incluye el componente ContactInputs", () => {
    render(<Footerc />);
    expect(screen.getByPlaceholderText("Mock Contact Input")).toBeInTheDocument();
  });
});
