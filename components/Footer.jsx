import Link from "next/link";

const styles = {};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/store">Store</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <p> All rights reserved &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
