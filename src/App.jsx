import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/user-detail/:nit" element={<UserDetail />} />
        <Route path="*" element={<h1>❌ Error 404: Página no encontrada</h1>} />
      </Routes>
    </div>
  );
}
