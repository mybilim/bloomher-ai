export default function HealthCard(
{
title,
value
}:{
title:string;
value:string;
}
){

return(
<div>

<h3>{title}</h3>

<p>{value}</p>

</div>
)

}
