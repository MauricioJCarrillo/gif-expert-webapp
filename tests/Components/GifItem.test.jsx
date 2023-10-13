import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Components";

describe("Prueba en componente <GifItem />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con los atributos de alt y src", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByRole("img").src).toBe(url);
    expect(screen.getByRole("img").alt).toBe(title);
  });

  test("Debe verificar que se renderice el texto del titulo", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
