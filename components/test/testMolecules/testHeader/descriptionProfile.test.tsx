jest.mock("/assets/sqlLogo.png", () => "sqlLogo.png");
jest.mock("/assets/pythonLogo.png", () => "pythonLogo.png");
jest.mock("/assets/javaLogo.png", () => "javaLogo.png");
jest.mock("/assets/jsLogo.png", () => "jsLogo.png");
jest.mock("/assets/cppLogo.png", () => "cppLogo.png");
jest.mock("/assets/htmlLogo.png", () => "htmlLogo.png");
jest.mock("/assets/kotlinLogo.png", () => "kotlinLogo.png");
jest.mock("/assets/scrumLogo.png", () => "scrumLogo.png");

import { render, screen } from "@testing-library/react";
import ProfileCard from "components/molecules/Header/DescriptionProfile";



// Mock de los átomos usados
jest.mock("components/atoms/Anytings/selectText", () => () => <div>Mock Skills</div>);
jest.mock("components/atoms/Header/Image", () => () => <img alt="Mock Profile" />);
jest.mock("components/atoms/Header/textProfile", () => () => <div>Mock ProfileText</div>);

describe("ProfileCard", () => {
  test("renderiza la sección de experiencia laboral", () => {
    render(<ProfileCard />);
    expect(screen.getByText("Experiencia Laboral")).toBeInTheDocument();
  });

  test("renderiza la sección de skills", () => {
    render(<ProfileCard />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  test("renderiza la sección de educación", () => {
    render(<ProfileCard />);
    expect(screen.getByText("Educacion")).toBeInTheDocument();
  });

  test("incluye los componentes hijos", () => {
    render(<ProfileCard />);
    expect(screen.getByAltText("Mock Profile")).toBeInTheDocument();
    expect(screen.getByText("Mock ProfileText")).toBeInTheDocument();
    expect(screen.getByText("Mock Skills")).toBeInTheDocument();
  });
});
