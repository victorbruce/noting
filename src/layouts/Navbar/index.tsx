import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-100">
      <div className="container py-4">
        <Link href="/">
          <a className="text-sm tracking-wider">NOTING.</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
