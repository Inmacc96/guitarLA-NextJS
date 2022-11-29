import GuitarsList from "../components/GuitarsList";
import Layout from "../components/Layout";

const Store = () => {
  return (
    <Layout
      title={"Online Shop"}
      description={"Online Shop, guitars for sale, instruments, GuitarLA"}
    >
      <main className="container">
        <h1 className="heading">Our Colletion</h1>

        <GuitarsList />
      </main>
    </Layout>
  );
};

export default Store;
