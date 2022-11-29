import Image from "next/image";
import Link from "next/link";

const Guitar = ({ guitar }) => {
  const { name, description, image, price, url } = guitar;
  return (
    <div>
      <Image
        width={600}
        height={400}
        src={image.data.attributes.formats.medium.url}
        alt={`${name} guitar`}
      />

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <Link href={`/guitars/${url}`}>View product</Link>
      </div>
    </div>
  );
};

export default Guitar;
