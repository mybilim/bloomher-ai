
export async function askAI(
message:string
){

const apiKey=
process.env.AI_API_KEY;


if(!apiKey){

return {
message:
"AI key not configured"
};

}


// Real provider connection goes here
// OpenAI / Gemini API call

return {

message:
"AI response generated",

provider:
"AI"

};

}

