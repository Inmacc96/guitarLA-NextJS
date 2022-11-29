import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/guitars.module.css";

const Guitar = ({ guitar, addCart }) => {
  const [quantity, setQuantity] = useState(0);

  const { name, description, image, price } = guitar[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (quantity < 1) {
      alert("Invalid quantity");
      return;
    }

    // Build a guitar object to be stored in the cart state
    const selectedGuitar = {
      id: guitar[0].id,
      image: image.data.attributes.url,
      name,
      price,
      quantity,
    };

    // Send information to the context
    addCart(selectedGuitar);
  };
  return (
    <Layout title={`${name} Guitar`}>
      <div className={styles.guitar}>
        <Image
          width={600}
          height={400}
          src={image.data.attributes.url}
          alt={`${name} guitar`}
        />

        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantity</label>

            <select
              id="quantity"
              onChange={(e) => setQuantity(+e.target.value)}
            >
              <option value="0">--- Select ---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Add cart" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Guitar;

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await response.json();

  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await response.json();

  return {
    props: { guitar },
  };
}

/* export async function getServerSideProps({ query: { url } }) {
    const response = await fetch(
      `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
    );
    const { data: guitar } = await response.json();
  
    return {
      props: { guitar },
    };
  }
   */
