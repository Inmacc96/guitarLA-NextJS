const Guitar = ({ guitar }) => {
  console.log(guitar);
  return <div>Guitar</div>;
};

export default Guitar;

export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await response.json();

  return {
    props: { guitar },
  };
}
