import { supabase } from "./lib/supabase";

function App() {
  const user = supabase.auth.user();
  console.log(user?.user_metadata.avatar_url);

  async function login() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "github",
    });
    if (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-primary w-screen min-h-screen grid place-items-center font-mono">
      <div className="flex flex-col gap-4 items-center">
        {!user ? (
          <button
            className="px-4 py-2 bg-tertiary border-[1px] border-white text-white rounded-lg"
            onClick={login}
          >
            Sign in with GitHub
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-tertiary border-[1px] border-white text-white rounded-lg"
            onClick={() => supabase.auth.signOut()}
          >
            Sign out
          </button>
        )}
        {user?.user_metadata.avatar_url ? (
          <>
            <img
              className="rounded-full w-16 border-[1px] border-white"
              src={user.user_metadata.avatar_url}
              alt={user.email}
            />
            <p className="text-white">
              Damn you ugly {user.user_metadata.name}...
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
