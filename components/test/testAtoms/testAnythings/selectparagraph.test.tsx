import { render, screen } from "@testing-library/react";
import SelectParagraph from "components/atoms/Anytings/selectParagraph";


describe("SelectParagraph", () => {
  test("renderiza texto correctamente", () => {
    render(<SelectParagraph texto="Hola mundo" />);
    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
  });

  test("aplica tamaño de fuente personalizado", () => {
    render(<SelectParagraph texto="Texto con tamaño" size={25} />);
    const p = screen.getByText("Texto con tamaño");
    expect(p).toHaveStyle("font-size: 25px");
  });
});
