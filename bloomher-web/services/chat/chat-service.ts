export interface ChatMessage{

role:
"user"|"assistant";

content:string;

}


export function saveMessage(
message:ChatMessage
){

return {
...message,
createdAt:
new Date()
};

}
