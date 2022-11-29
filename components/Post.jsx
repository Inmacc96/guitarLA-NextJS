import Image from "next/image";
import Link from "next/link";

const Post = ({ post }) => {
  const { title, image, content, url, publisheAt } = post;

  return (
    <article>
      <Image
        width={600}
        height={400}
        src={image.data.attributes.formats.medium.url}
        alt={`Blog ${title}`}
      />

      <div>
        <h3>{title}</h3>
        <p>{publisheAt}</p>
        <p>{content}</p>
        <Link href="/blog/${url}">Read Post</Link>
      </div>
    </article>
  );
};

export default Post;
