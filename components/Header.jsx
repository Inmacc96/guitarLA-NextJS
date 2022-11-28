import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image src="/img/logo.svg" width={300} height={400} alt="logo app" />
      </div>
    </header>
  );
};

export default Header;
