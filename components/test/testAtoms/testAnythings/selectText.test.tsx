import { render, screen } from "@testing-library/react";
import SectionText from "components/atoms/Anytings/selectText";


describe("SectionText", () => {
  test("muestra el título por defecto", () => {
    render(<SectionText />);
    expect(screen.getByText("Título")).toBeInTheDocument();
  });

  test("muestra texto cuando no hay skills", () => {
    render(<SectionText title="Sobre mí" text="Soy desarrollador web" />);
    expect(screen.getByText("Soy desarrollador web")).toBeInTheDocument();
  });

  test("muestra lista de skills", () => {
    const skills = [
      { name: "React", image: "react.png" },
      { name: "TypeScript" },
    ];

    render(<SectionText title="Tecnologías" skills={skills} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByAltText("React")).toHaveAttribute("src", "react.png");
  });
});
