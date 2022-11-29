import Layout from "../components/Layout";
import Guitar from "../components/Guitar";
import Post from "../components/Post";
import styles from "../styles/grid.module.css";

export default function Home({ guitars, posts }) {
  return (
    <Layout title={"Inicio"} description={"Music blog, guitar sales and more"}>
      <main className="container">
        <h1 className="heading">Our Collection</h1>

        <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      </main>

      <section className="container">
        <h2 className="heading">Blog</h2>

        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;

  const [resGuitars, resPosts] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
  ]);
  const [{ data: guitars }, { data: posts }] = await Promise.all([
    resGuitars.json(),
    resPosts.json(),
  ]);

  console.log(guitars);
  console.log(posts);

  return {
    props: { guitars, posts },
  };
}
