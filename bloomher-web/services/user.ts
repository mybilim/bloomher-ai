
import {db} from "@/lib/firebase/client";

import {
doc,
setDoc
} from "firebase/firestore";


export async function saveUser(
uid:string,
data:any
){

return setDoc(
doc(db,"users",uid),
data,
{
merge:true
}
);

}

