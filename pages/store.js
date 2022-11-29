import Guitar from "../components/Guitar";
import Layout from "../components/Layout";

const Store = ({ guitars }) => {
  return (
    <Layout
      title={"Online Shop"}
      description={"Online Shop, guitars for sale, instruments, GuitarLA"}
    >
      <main className="container">
        <h1 className="heading">Our Colletion</h1>

        {guitars?.map((guitar) => (
          <Guitar key={guitar.id} guitar={guitar.attributes} />
        ))}
      </main>
    </Layout>
  );
};

export default Store;

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const { data: guitars } = await response.json();

  return {
    props: { guitars },
  };
}
