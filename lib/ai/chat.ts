import {askAI} from "./client";

export async function generateAIResponse(
message:string
){

return await askAI(message);

}
