import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <nav className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
        <Link
          to="/highscores"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
        >
          View Highscores
        </Link>
        <Link
          to="/join"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
        >
          Sign up
        </Link>
        <Link
          to="/login"
          className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600"
        >
          Log In
        </Link>
      </nav>
    </main >
  );
}
