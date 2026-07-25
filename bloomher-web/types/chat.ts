export interface ChatMessage{
 id:string;
 uid:string;
 role:"user"|"assistant";
 message:string;
 createdAt:string;
}
