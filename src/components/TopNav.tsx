import Link from "next/link";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <nav className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-baseline space-x-4 text-primary">
            <Link href="">Home</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
