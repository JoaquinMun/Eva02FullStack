import { render, screen } from "@testing-library/react";
import CardProyecto from "components/molecules/ProyectoMolecules/cardProyecto";


// Mocks de los átomos
jest.mock("components/atoms/Anytings/selectImage", () => ({ src, alt }: any) => (
  <img src={src} alt={alt} />
));
jest.mock("components/atoms/Anytings/selectParagraph", () => ({ texto }: any) => <p>{texto}</p>);
jest.mock("components/atoms/Anytings/selectTittle", () => ({ texto }: any) => <h2>{texto}</h2>);
jest.mock("components/atoms/Anytings/selectTechLogo", () => ({ name }: any) => <span>{name}</span>);

describe("CardProyecto", () => {
  const mockProps = {
    titulo: "Proyecto Web",
    descripcion: "Una descripción de prueba",
    imagen: "/mock.png",
    tecnologias: [
      { src: "/react.png", name: "React" },
      { src: "/ts.png", name: "TypeScript" },
    ],
  };

  test("renderiza el título del proyecto", () => {
    render(<CardProyecto {...mockProps} />);
    expect(screen.getByText("Proyecto Web")).toBeInTheDocument();
  });

  test("renderiza la descripción", () => {
    render(<CardProyecto {...mockProps} />);
    expect(screen.getByText("Una descripción de prueba")).toBeInTheDocument();
  });

  test("muestra las tecnologías utilizadas", () => {
    render(<CardProyecto {...mockProps} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  test("muestra la imagen del proyecto", () => {
    render(<CardProyecto {...mockProps} />);
    const img = screen.getByAltText("Proyecto Web");
    expect(img).toHaveAttribute("src", "/mock.png");
  });
});
