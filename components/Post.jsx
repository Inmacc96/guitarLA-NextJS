import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../utils/helpers";
import styles from "../styles/post.module.css";

const Post = ({ post }) => {
  const { title, image, content, url, publishedAt } = post;
  return (
    <article>
      <Image
        width={600}
        height={400}
        src={image.data.attributes.formats.medium.url}
        alt={`Blog ${title}`}
      />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(publishedAt)}</p>
        <p className={styles.summary}>{content}</p>
        <Link href={`/blog/${url}`} className={styles.link}>
          Read Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
