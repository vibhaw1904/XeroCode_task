"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/ContextProvider";

const Dashboard = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();

  if (!userContext) {
    throw new Error("UserContext must be used within a ContextProvider");
  }

  const { user } = userContext;

  useEffect(() => {
    if (!user) {
      router.push("/login"); 
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      Hi, {user.email}. This is the dashboard.
    </div>
  );
};

export default Dashboard;
