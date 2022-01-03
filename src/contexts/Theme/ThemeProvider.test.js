import { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ThemeProvider from "./ThemeProvider";
import ThemeContext from "./ThemeContext";

/**
 * This components is for the testing purposes only
 */
const TestComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setDarkTheme = () => setTheme("dark");

  return (
    <button data-testid="test-button" className={theme} onClick={setDarkTheme}>
      Test Button
    </button>
  );
};

const renderTestComponent = () =>
  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

describe("ThemeProvider", () => {
  it("sets light theme as default", () => {
    renderTestComponent();

    // classname of <button> should be "light"
    expect(screen.getByTestId("test-button").className).toEqual("light");
  });

  it("changes theme", () => {
    renderTestComponent();

    // Clicking on button will change theme to dark
    fireEvent.click(screen.getByTestId("test-button"));

    // classname of <button> should be "dark"
    expect(screen.getByTestId("test-button").className).toEqual("dark");
  });
});
