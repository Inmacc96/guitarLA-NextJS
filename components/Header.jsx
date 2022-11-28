import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image src="/img/logo.svg" width={300} height={400} alt="logo app" />

        <Nav />
      </div>
    </header>
  );
};

export default Header;
