"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/ContextProvider";

export default function Home() {
  // const userContext = useContext(UserContext);
  // const router = useRouter();

  // if (!userContext) {
  //   throw new Error("UserContext must be used within a ContextProvider");
  // }

  // const { user } = userContext;

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login"); 
  //   } else {
  //     router.push("/dashboard"); 
  //   }
  // }, [user, router]);

  return <main>Hi, this is Home</main>;
}
