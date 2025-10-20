import { render, screen } from "@testing-library/react";
import ImagenPortada from "components/atoms/Anytings/selectImage";

describe("ImagenPortada", () => {
  test("renderiza la imagen con los props requeridos", () => {
    render(<ImagenPortada src="test.jpg" alt="Imagen de prueba" />);
    const img = screen.getByAltText("Imagen de prueba") as HTMLImageElement;

    expect(img).toBeInTheDocument();
    expect(img.src).toContain("test.jpg");
    expect(img.alt).toBe("Imagen de prueba");
  });

  test("usa la altura por defecto cuando no se especifica", () => {
    render(<ImagenPortada src="default.jpg" alt="Default height" />);
    const img = screen.getByAltText("Default height") as HTMLImageElement;

    expect(img.style.height).toBe("160px");
  });

  test("aplica la altura personalizada correctamente", () => {
    render(<ImagenPortada src="custom.jpg" alt="Altura personalizada" height={200} />);
    const img = screen.getByAltText("Altura personalizada") as HTMLImageElement;

    expect(img.style.height).toBe("200px");
  });

  test("tiene estilos de ancho y ajuste de objeto", () => {
    render(<ImagenPortada src="style.jpg" alt="Con estilo" />);
    const img = screen.getByAltText("Con estilo") as HTMLImageElement;

    expect(img.style.width).toBe("100%");
    expect(img.style.objectFit).toBe("cover");
  });
});
