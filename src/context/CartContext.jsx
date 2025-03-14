import { createContext, useState } from "react";

// Tạo Context để chia sẻ dữ liệu giỏ hàng
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Giỏ hàng hiện tại:", cart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
