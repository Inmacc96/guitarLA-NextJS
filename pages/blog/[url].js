import Layout from "../../components/Layout";
import Image from "next/image";
import { formatDate } from "../../utils/helpers";
import styles from "../../styles/post.module.css";

const Post = ({ post }) => {
  const { title, content, image, publishedAt } = post[0].attributes;
  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          width={1000}
          height={400}
          src={image.data.attributes.url}
          alt={`Blog ${title}`}
        />

        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.date}>{formatDate(publishedAt)}</p>
          <p className={styles.text}>{content}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );
  const { data: post } = await response.json();

  if (post.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
