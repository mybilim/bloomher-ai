"use client";

import useAuth from "@/hooks/useAuth";

export default function Dashboard(){

const {user,loading}=useAuth();

if(loading)
return <p>Loading...</p>;

return(

<div className="p-10">

<h1 className="text-4xl">
BloomHer Dashboard
</h1>

<p>
{user?.email || "User"}
</p>

</div>

)

}
