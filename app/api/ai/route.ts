import {NextResponse} from "next/server";
import {generateAIResponse} from "@/lib/ai/chat";


export async function POST(req:Request){

const body=await req.json();

const result=
await generateAIResponse(body.message);


return NextResponse.json(result);

}
