import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">🛒 Giỏ hàng</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">🛍️ Giỏ hàng trống</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md inline-block" />
                <span className="ml-4 text-lg">{item.name} - {item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
