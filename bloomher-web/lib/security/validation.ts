export function validateEmail(
email:string
){

return email.includes("@");

}


export function required(
value:any
){

return value!==null &&
value!==undefined &&
value!=="";

}
