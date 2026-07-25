export async function askAI(
message:string
){

return {
role:"assistant",
content:
`BloomHer AI response for: ${message}`
};

}
