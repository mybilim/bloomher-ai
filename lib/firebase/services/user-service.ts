
import {
db
}
from "@/lib/firebase/client";


export async function createUserProfile(
uid:string,
data:any
){

return {

uid,

...data

};

}


export async function getUserProfile(
uid:string
){

return {

uid

};

}

