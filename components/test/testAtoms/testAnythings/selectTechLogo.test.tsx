import { render, screen } from "@testing-library/react";
import TechLogo from "components/atoms/Anytings/selectTechLogo";


describe("TechLogo", () => {
  test("renderiza la imagen con el src y alt correctos", () => {
    render(<TechLogo src="logo.png" name="React" />);
    const img = screen.getByAltText("React");
    expect(img).toHaveAttribute("src", "logo.png");
    expect(img).toHaveAttribute("title", "React");
  });

  test("aplica tamaño personalizado", () => {
    render(<TechLogo src="logo.png" name="React" size={50} />);
    const img = screen.getByAltText("React");
    expect(img).toHaveStyle("width: 50px");
    expect(img).toHaveStyle("height: 50px");
  });
});
