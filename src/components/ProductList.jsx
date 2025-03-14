import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const products = [
  { id: 1, name: "Sản phẩm A", price: "200.000đ", image: image1 },
  { id: 2, name: "Sản phẩm B", price: "300.000đ", image: image2 },
  { id: 3, name: "Sản phẩm C", price: "400.000đ", image: image3 },
];

function ProductList() {
  const { addToCart } = useContext(CartContext); // Lấy hàm addToCart từ context

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">🛍️ Danh sách sản phẩm</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-4 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-lg">{product.price}</p>
              <div className="mt-4 flex justify-between">
                <Link to={`/product/${product.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">🔍 Xem</Link>
                <button
                  onClick={() => addToCart(product)} // Gọi addToCart khi ấn
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  🛒 Thêm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
