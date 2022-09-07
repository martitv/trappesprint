import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

import { useUser } from "~/utils";
import { getAllHighscores } from "~/models/highscore.server";

export async function loader() {
  const highscores = await getAllHighscores();
  return json({ highscores });
}

const formatTime = (time: number) => {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;

  return `${minutes}:${seconds}`
}

export default function HighscoresPage() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Highscores</Link>
        </h1>
        <p>{user.username}</p>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link to="new" className="block p-4 text-xl text-blue-500">
            + New Highscore
          </Link>

          <hr />

          {data.highscores.length === 0 ? (
            <p className="p-4">No highscores yet</p>
          ) : (
            <ol>
              {data.highscores.map((highscore) => (
                <li key={highscore.id}>
                  <div className="flex gap-2 space-x-4">
                    <div>{formatTime(highscore.time)}</div>
                    <div>{highscore.user.username}</div>
                    <div>{new Date(highscore.createdAt).toLocaleString()}</div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </main>
    </div>
  );
}
