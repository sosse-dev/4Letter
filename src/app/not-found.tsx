import Link from "next/link";

function NotFound() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="">Page not found</p>
        <Link
          className="px-7 py-2 rounded-xl border-2 border-accent mt-2"
          href="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
