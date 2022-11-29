import Layout from "../components/Layout";

const Cart = () => {
  return (
    <Layout title="Shopping Cart">
      <main className="container">
        <h1 className="heading">Cart</h1>

        <div>
          <div>
            <h2>Articles</h2>
          </div>

          <aside>
            <h3>Order Summary</h3>
            <p>Total to be paid:</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
