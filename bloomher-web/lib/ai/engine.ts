export interface AIResponse{
message:string;
category:string;
}

export function generateAIResponse(
input:string
):AIResponse{

return{
message:
"BloomHer AI recommendation generated",
category:"health"
};

}
