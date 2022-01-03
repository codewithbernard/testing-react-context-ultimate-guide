import { ThemeProvider } from "./contexts/Theme";
import Button from "./components/Button";

const App = () => {
  return (
    <ThemeProvider>
      <Button>Click me!</Button>
    </ThemeProvider>
  );
};

export default App;
