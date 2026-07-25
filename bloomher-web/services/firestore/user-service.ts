import {
doc,
setDoc,
getDoc
} from "firebase/firestore";

import {db} from "@/lib/firebase/client";


export async function saveUser(
id:string,
data:any
){

return setDoc(
doc(db,"users",id),
data,
{merge:true}
);

}


export async function fetchUser(
id:string
){

const snap =
await getDoc(
doc(db,"users",id)
);

return snap.exists()
?snap.data()
:null;

}
