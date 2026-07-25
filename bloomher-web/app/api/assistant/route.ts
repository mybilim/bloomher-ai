
import {
askAI
}
from "@/lib/ai/provider";


export async function POST(
req:Request
){

const body=
await req.json();


const result=
await askAI(
body.message
);


return Response.json(
result
);

}

