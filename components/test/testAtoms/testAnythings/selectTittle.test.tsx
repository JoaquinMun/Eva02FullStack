import { render, screen } from "@testing-library/react";
import SelectTittle from "components/atoms/Anytings/selectTittle";


describe("SelectTittle", () => {
  test("renderiza el texto correctamente", () => {
    render(<SelectTittle texto="Hola Mundo" />);
    expect(screen.getByText("Hola Mundo")).toBeInTheDocument();
  });

  test("aplica tamaño y alineación personalizados", () => {
    render(<SelectTittle texto="Prueba" size={30} align="center" />);
    const h1 = screen.getByText("Prueba");
    expect(h1).toHaveStyle("font-size: 30px");
    expect(h1).toHaveStyle("text-align: center");
  });
});
