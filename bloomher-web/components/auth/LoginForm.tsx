"use client";

import { useState } from "react";
import { loginUser } from "@/lib/auth/auth-service";

export default function LoginForm(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [loading,setLoading]=useState(false);

async function submit(e:any){
e.preventDefault();
setLoading(true);

try{
await loginUser(email,password);
window.location.href="/dashboard";
}
catch(err){
alert("Login failed");
}

setLoading(false);
}

return(
<form onSubmit={submit} className="space-y-4">

<input
className="border p-3 w-full"
placeholder="Email"
value={email}
onChange={e=>setEmail(e.target.value)}
/>

<input
className="border p-3 w-full"
placeholder="Password"
type="password"
value={password}
onChange={e=>setPassword(e.target.value)}
/>

<button className="bg-pink-500 text-white p-3 w-full">
{loading?"Loading":"Login"}
</button>

</form>
)

}
