
"use client";

import {
useState
}
from "react";


export default function AssistantChat(){

const [message,setMessage]=useState("");

return (

<div className="rounded-xl border p-6">

<h2 className="text-xl font-bold">
BloomHer AI
</h2>

<input
className="border p-2 mt-4"
value={message}
onChange={
e=>setMessage(e.target.value)
}
/>

</div>

)

}

