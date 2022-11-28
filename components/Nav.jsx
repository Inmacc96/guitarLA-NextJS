import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/nav.module.css";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={router.pathname === "/" ? styles.active : ""}>
        Home
      </Link>
      <Link
        href="/aboutus"
        className={router.pathname === "/aboutus" ? styles.active : ""}
      >
        About Us
      </Link>
      <Link
        href="/store"
        className={router.pathname === "/store" ? styles.active : ""}
      >
        Store
      </Link>
      <Link
        href="/blog"
        className={router.pathname === "/blog" ? styles.active : ""}
      >
        Blog
      </Link>
    </nav>
  );
};

export default Nav;
