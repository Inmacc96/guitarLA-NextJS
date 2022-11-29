import Layout from "../components/Layout";
import Link from "next/link";

const Page404 = () => {
  return (
    <Layout title="GuitarLA - Page Not Found">
      <p className="error">Page Not Found</p>
      <Link href="/" className="error-link">
        Back to home
      </Link>
    </Layout>
  );
};

export default Page404;
