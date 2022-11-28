import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/aboutus">About Us</Link>
      <Link href="/store">Store</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
};

export default Nav;
