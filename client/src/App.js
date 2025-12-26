import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import BooksPage from "./pages/BooksPage";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
