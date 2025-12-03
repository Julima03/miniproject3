import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [] });

  // Load cart when start
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add item in cart
  const addToCart = async (book) => {
    try {
      const res = await axios.post("http://localhost:5050/api/cart/add", {
        book,
      });

      setCart(res.data);
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}