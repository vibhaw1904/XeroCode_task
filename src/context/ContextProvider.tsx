// context/ContextProvider.tsx
"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { account } from "@/appwrite/config";

interface UserContextType {
  user: { email: string; id: string } | null;
  setUser: React.Dispatch<React.SetStateAction<{ email: string; id: string } | null>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string; id: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await account.get();
        setUser({ email: res.email, id: res.$id });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
