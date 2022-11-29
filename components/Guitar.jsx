import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitars.module.css";

const Guitar = ({ guitar }) => {
  const { name, description, image, price, url } = guitar;
  return (
    <div className={styles.guitar}>
      <Image
        width={600}
        height={400}
        src={image.data.attributes.formats.medium.url}
        alt={`${name} guitar`}
      />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/guitars/${url}`} className={styles.link}>
          View product
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
