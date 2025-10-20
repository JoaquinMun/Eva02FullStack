import { render, screen } from "@testing-library/react";
import ContactInputs from "components/atoms/Anytings/selectinput";


describe("ContactInputs", () => {
  test("renderiza el título y los campos correctamente", () => {
    render(<ContactInputs />);

    expect(screen.getByText("Contáctame")).toBeInTheDocument();
    expect(screen.getByLabelText("¿De qué trata su proyecto?")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("que tiene en mente?")).toBeInTheDocument();
    expect(screen.getByLabelText("Su correo electrónico")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("usted@ejemplo.com")).toBeInTheDocument();
  });
});