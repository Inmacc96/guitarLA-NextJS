import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/cart.module.css";

const Cart = ({ cart }) => {
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
                  <div key={product} className={styles.product}>
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
            <p>Total to be paid:</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
