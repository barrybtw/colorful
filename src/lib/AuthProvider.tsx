import { createContext, useEffect, useState, useContext } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase";

const UserContext = createContext<Session>({} as Session);

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [session, setSession] = useState<Session>({} as Session);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session as Session);
        window.location.href =
          location.protocol + "//" + location.host + location.pathname;
      },
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={session}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const user = supabase.auth.user();
  return user;
};
