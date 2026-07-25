import {
generateAIResponse
}
from "@/lib/ai/engine";


export async function POST(
req:Request
){

const body=
await req.json();


return Response.json(
generateAIResponse(
body.message
)
);

}
