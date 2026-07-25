"use client";

import {useEffect,useState} from "react";


export default function ProfileCard(){

const [profile,setProfile]=useState<any>(null);


useEffect(()=>{

const data=localStorage.getItem(
"bloomher_profile"
);

if(data)
setProfile(JSON.parse(data));

},[]);


return(

<div className="border p-5 rounded">

<h2 className="text-xl">
Profile
</h2>


<p>
Name:
{profile?.name || "Not set"}
</p>


</div>

)

}
