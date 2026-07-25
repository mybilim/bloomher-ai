
import {
openAIResponse
}
from "./providers/openai";


import {
geminiResponse
}
from "./providers/gemini";



export async function runAI(
message:string,
provider="openai"
){


if(provider==="gemini"){

return geminiResponse(message);

}


return openAIResponse(message);


}

