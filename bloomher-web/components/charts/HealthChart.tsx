
"use client";


import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip
}
from "recharts";


const data=[

{
day:"Mon",
score:70
},

{
day:"Tue",
score:80
},

{
day:"Wed",
score:90
}

];


export default function HealthChart(){

return(

<LineChart
width={400}
height={250}
data={data}
>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>

<Line
dataKey="score"
/>

</LineChart>

)

}

