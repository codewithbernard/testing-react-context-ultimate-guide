import { render, screen } from "@testing-library/react";

import { ThemeProvider } from "../../contexts/Theme";
import Button from "./Button";

const renderButton = () =>
  render(
    <ThemeProvider>
      <Button>Test Button</Button>
    </ThemeProvider>
  );

describe("Button", () => {
  it("renders correctly", () => {
    renderButton();
  });

  it("has correct className", () => {
    renderButton();
    expect(screen.getByText("Test Button").className).toEqual("btn-light");
  });
});
