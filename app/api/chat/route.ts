
import {NextResponse}
from "next/server";


import {
openAIChat
}
from "@/lib/ai/providers/openai-real";


export async function POST(
req:Request
){

const {
message
}=await req.json();


const result=
await openAIChat(message);


return NextResponse.json(result);


}

