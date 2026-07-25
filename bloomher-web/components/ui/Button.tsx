"use client";

export default function Button(
{
children,
...props
}:any
){

return(
<button
className="px-4 py-2 rounded-lg border"
{...props}
>
{children}
</button>
)

}
