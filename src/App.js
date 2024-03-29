// import logo from './logo.svg';
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import theme from "./components/globalStyles/Theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
