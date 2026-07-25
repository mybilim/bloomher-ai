"use client";

import {useState} from "react";


export default function AIChat(){

const [text,setText]=useState("");

return(
<div>

<h1>
BloomHer AI Assistant
</h1>


<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Ask BloomHer AI"
/>


</div>
)

}
