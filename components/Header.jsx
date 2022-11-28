import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href={"/"}>
          <Image src="/img/logo.svg" width={300} height={400} alt="logo app" />
        </Link>

        <Nav />
      </div>
    </header>
  );
};

export default Header;
