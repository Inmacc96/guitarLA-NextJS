import Layout from "../components/Layout";
import styles from "../styles/cart.module.css";

const Cart = () => {
  return (
    <Layout title="Shopping Cart">
      <main className="container">
        <h1 className="heading">Cart</h1>

        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Articles</h2>
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
