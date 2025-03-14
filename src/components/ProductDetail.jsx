import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
  function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="text-center text-red-500 text-2xl">❌ Sản phẩm không tồn tại</h2>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="max-w-lg bg-white p-6 rounded-xl shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-3xl font-bold mt-4 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 text-xl mt-2">💰 Giá: {product.price}</p>
        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">⬅️ Quay lại</Link>
      </div>
    </div>
  );
}
export default ProductDetail;