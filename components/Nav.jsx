import Link from "next/link";
import styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/aboutus">About Us</Link>
      <Link href="/store">Store</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
};

export default Nav;
