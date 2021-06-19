import logo from "./logo.svg";
import "./App.css";
import Theme from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div className="App"></div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
