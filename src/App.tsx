//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Library } from "./pages/Library";
import { Enterpreneure } from "./pages/Entrepreneure";
import { BookDetails } from "./pages/BookDetails";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Library />}></Route>
            <Route path="/entrepreneurship" element={<Enterpreneure />}></Route>
            <Route path="/bookdetails" element={<BookDetails />}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
