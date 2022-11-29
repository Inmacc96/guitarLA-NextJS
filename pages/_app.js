import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      const updatedCart = cart.map((guitarState) => {
        if (guitarState.id == guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, guitar]);
    }
  };

  return <Component {...pageProps} cart={cart} addCart={addCart} />;
}

export default MyApp;
