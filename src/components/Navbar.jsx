import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-5 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">🏬 Shop</Link>
      <Link to="/cart" className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition">🛒 Giỏ hàng</Link>
    </nav>
  );
}
export default Navbar;