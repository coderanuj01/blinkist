//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Library } from "./pages/Library";
import { Enterpreneure } from "./pages/Entrepreneure";
import { BookDetails } from "./pages/BookDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Library />}></Route>
          <Route path="/entrepreneurship" element={<Enterpreneure />}></Route>
          <Route path="/bookdetails" element={<BookDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
