interface Props{
title:string;
value:string;
}

export default function DashboardCard(
{title,value}:Props
){
return(
<div className="border rounded-xl p-5">
<h3 className="font-bold">
{title}
</h3>

<p>
{value}
</p>

</div>
)
}
