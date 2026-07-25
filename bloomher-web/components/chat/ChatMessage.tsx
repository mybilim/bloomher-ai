export default function ChatMessage(
{
role,
message
}:any
){

return(
<div className="border rounded-xl p-4">

<strong>
{role}
</strong>

<p>
{message}
</p>

</div>
)

}
