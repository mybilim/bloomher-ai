"use client";

import {useState} from "react";
import {forgotPassword} from "@/lib/auth/auth-service";

export default function ForgotPasswordForm(){

const[email,setEmail]=useState("");

async function submit(e:any){

e.preventDefault();

await forgotPassword(email);

alert("Password reset email sent");

}

return(

<form onSubmit={submit}>

<input
className="border p-3"
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<button className="p-3 bg-blue-500 text-white">
Reset Password
</button>

</form>

)

}
