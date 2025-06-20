import { useEffect } from "react";
import Portfolio from "./components/Portfolio";
import { useTheme } from "./lib/stores/useTheme";

function App() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return <Portfolio />;
}

export default App;
