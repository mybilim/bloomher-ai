"use client";

import {useState} from "react";

export default function Onboarding(){

const [name,setName]=useState("");

function submit(){

localStorage.setItem(
"bloomher_profile",
JSON.stringify({
name
})
);

window.location.href="/dashboard";

}


return(

<div className="p-10">

<h1 className="text-3xl">
Welcome to BloomHer
</h1>


<input
className="border p-3 mt-5"
placeholder="Your Name"
value={name}
onChange={e=>setName(e.target.value)}
/>


<button
className="block mt-5 bg-pink-500 text-white p-3"
onClick={submit}
>

Continue

</button>


</div>

)

}
