
export async function openAIChat(
message:string
){

const response =
await fetch(
"https://api.openai.com/v1/chat/completions",
{
method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":
`Bearer ${process.env.OPENAI_API_KEY}`
},

body:JSON.stringify({

model:"gpt-5-mini",

messages:[
{
role:"user",
content:message
}
]

})

}
);


return response.json();

}

