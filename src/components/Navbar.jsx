import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/about">ℹ️ About</Link></li>
        <li><Link to="/user">ℹ️ User</Link></li>
      </ul>
    </nav>
  );
}
