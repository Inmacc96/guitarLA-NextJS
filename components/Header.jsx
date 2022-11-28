import Image from "next/image";
import Nav from "./Nav";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Image src="/img/logo.svg" width={300} height={400} alt="logo app" />

        <Nav />
      </div>
    </header>
  );
};

export default Header;
