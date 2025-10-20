import { render, screen } from "@testing-library/react";
import ProfileImage from "components/atoms/Header/Image";

describe("ProfileImage", () => {
  test("renderiza la imagen con src y alt correctos", () => {
    render(<ProfileImage />);
    const img = screen.getByAltText("Profile");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/profile.jpg");
  });

  test("aplica estilos correctamente", () => {
    render(<ProfileImage />);
    const img = screen.getByAltText("Profile");
    expect(img).toHaveStyle("width: 100px");
    expect(img).toHaveStyle("height: 100px");
    expect(img).toHaveStyle("border-radius: 50%");
  });
});
