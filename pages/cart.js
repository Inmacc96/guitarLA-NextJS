import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/cart.module.css";

const Cart = ({ cart, updateQuantity }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCalc = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    setTotal(totalCalc);
  }, [cart]);

  return (
    <Layout title="Shopping Cart">
      <main className="container">
        <h1 className="heading">Cart</h1>

        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Articles</h2>

            {cart.length === 0
              ? "Empty cart"
              : cart.map((product) => (
                  <div key={product.id} className={styles.product}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={product.image}
                        alt={`${product.name} guitar`}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{product.name}</p>

                      <div>
                        <p>Quantity: </p>

                        <select
                          className={styles.select}
                          value={product.quantity}
                          onChange={(e) =>
                            updateQuantity({
                              id: product.id,
                              quantity: +e.target.value,
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={styles.price}>
                        $<span>{product.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{product.price * product.quantity}</span>
                      </p>
                    </div>
                  </div>
                ))}
          </div>

          <aside className={styles.summary}>
            <h3>Order Summary</h3>
            <p>Total to be paid: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
