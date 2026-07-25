
import {
plans
}
from "@/lib/payment/plans";


export default function Pricing(){

return(

<div>

{
plans.map(
p=>(

<div
key={p.name}
className="border p-5 rounded-xl"
>

<h2>
{p.name}
</h2>

<p>
${p.price}
</p>

</div>

)

)
}

</div>

)

}

