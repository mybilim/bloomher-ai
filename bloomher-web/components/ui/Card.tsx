
interface Props{

title:string;

children:any;

}


export default function Card(
{
title,
children
}:Props
){

return(

<div className="
rounded-2xl
border
p-6
shadow-sm
">

<h3 className="font-bold">

{title}

</h3>


{children}


</div>

)

}

