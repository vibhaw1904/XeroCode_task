"use client";

import { account } from "@/appwrite/config";
import { useEffect, useState, createContext, ReactNode, FC } from "react";

interface User {
  email: string;
  id: string;
}

interface UserContextValue {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const UserContext = createContext<UserContextValue | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    (async function () {
      try {
        const res = await account.get();
        setUser({ email: res.email, id: res.$id });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
