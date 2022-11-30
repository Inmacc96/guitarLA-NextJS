import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const cartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) ?? []
      : [];
  const [cart, setCart] = useState(cartLS);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    setIsPageReady(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      const updatedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, guitar]);
    }
  };

  const updateQuantity = (guitar) => {
    const updatedCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = guitar.quantity;
      }
      return guitarState;
    });

    setCart(updatedCart);
  };

  const deleteProduct = (id) => {
    const updatedCart = cart.filter((guitarState) => guitarState.id !== id);

    setCart(updatedCart);
  };

  return isPageReady ? (
    <Component
      {...pageProps}
      cart={cart}
      addCart={addCart}
      updateQuantity={updateQuantity}
      deleteProduct={deleteProduct}
    />
  ) : null;
}

export default MyApp;
