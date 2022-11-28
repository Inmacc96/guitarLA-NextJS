import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href={"/"}>
          <Image src="/img/logo.svg" width={300} height={400} alt="logo app" />
        </Link>

        <nav className={styles.nav}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
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
      </div>
    </header>
  );
};

export default Header;
