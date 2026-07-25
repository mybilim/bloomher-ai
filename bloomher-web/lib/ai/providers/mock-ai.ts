import {
AIProvider
} from "./provider";


export class MockAI implements AIProvider{

async generate(
prompt:string
){

return `BloomHer AI response: ${prompt}`;

}

}
