

export interface UserData{

uid:string;

name:string;

email:string;

age:number;

}


export function saveUser(
user:UserData
){

return user;

}


