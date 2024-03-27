import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="fixed w-full h-fit items-center justify-between backdrop-blur-lg z-50 hidden lg:flex">
        <Link href="/">
          <div className="w-12 h-12 flex gap-x-1 items-center ml-2 mt-2">
            <Image
              src="/4letterlogo.png"
              width={80}
              height={80}
              alt="4letterlogo"
              className="object-contain rounded-full border-2 border-secondary"
            />
            <h1 className="text-3xl font-handwriting">4Letter</h1>
          </div>
        </Link>

        <div className="">
          <button className="pr-10 h-14 hover:text-accent">Home</button>
          <button className="pr-10 h-14 hover:text-accent">About</button>
          <button className="pr-10 h-14 hover:text-accent">Contact</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
