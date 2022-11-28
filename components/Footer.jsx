import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/store">Store</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <p className={styles.copyright}>
          All rights reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
