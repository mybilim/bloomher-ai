export interface AIMessage {

id:string;

role:
"user" |
"assistant";

content:string;

createdAt:number;

}


export interface AIResponse {

success:boolean;

message:string;

provider:string;

}

