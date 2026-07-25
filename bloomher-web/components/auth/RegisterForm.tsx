"use client";

import {useState} from "react";
import {registerUser} from "@/lib/auth/auth-service";

export default function RegisterForm(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

async function submit(e:any){

e.preventDefault();

try{
await registerUser(email,password);
alert("Account created");
window.location.href="/dashboard";
}
catch{
alert("Registration failed");
}

}

return(

<form onSubmit={submit} className="space-y-4">

<input
className="border p-3 w-full"
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
className="border p-3 w-full"
placeholder="Password"
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<button className="bg-green-500 text-white p-3 w-full">
Create Account
</button>

</form>

)

}
