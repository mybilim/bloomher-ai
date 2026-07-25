
import {
AIMessage
}
from "@/types/models/ai";


export const memory:AIMessage[]=[];


export function saveMessage(
message:AIMessage
){

memory.push(message);

}


export function getMemory(){

return memory;

}

