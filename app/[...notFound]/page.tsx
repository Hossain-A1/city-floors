import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center min-h-screen flex justify-center items-center flex-col gap-2.5">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <u className="text-blue-500 hover:underline">Go back to home</u>
      </Link>
    </div>
  );
};

export default NotFoundPage;