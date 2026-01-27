import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Foter from "./components/Footer";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ShowAllBooks from "./pages/ShowAllBooks";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <Router>
      <Navbar />
      <Foter/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path="/books" element={<ShowAllBooks />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
