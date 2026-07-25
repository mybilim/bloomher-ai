"use client";

import useAuth from "@/hooks/useAuth";

export default function Dashboard(){

 const {user}=useAuth();

 return(
  <main className="p-10">
    <h1 className="text-3xl font-bold">
      BloomHer Dashboard
    </h1>

    <p>
      Welcome {user?.email || "User"}
    </p>

  </main>
 );

}
