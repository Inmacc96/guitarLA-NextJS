import GuitarsList from "../components/GuitarsList";
import Layout from "../components/Layout";

const Store = ({ guitars }) => {
  console.log(guitars);
  return (
    <Layout
      title={"Online Shop"}
      description={"Online Shop, guitars for sale, instruments, GuitarLA"}
    >
      <main className="container">
        <h1 className="heading">Our Colletion</h1>

        <GuitarsList guitars={guitars} />
      </main>
    </Layout>
  );
};

export default Store;

// Esta información no se va a estar regenerando con cada visita a la página
export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const { data: guitars } = await response.json();

  return {
    props: { guitars },
  };
}
