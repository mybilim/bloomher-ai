
export async function openAIResponse(
message:string
){

return {

provider:"openai",

message:
`OpenAI response placeholder:
${message}`

};

}

