import {
doc,
setDoc,
getDoc
}
from "firebase/firestore";

import {db} from "@/lib/firebase/client";


export async function createUserProfile(
uid:string,
data:any
){

await setDoc(
doc(db,"users",uid),
data
);

}



export async function getUserProfile(
uid:string
){

const snap =
await getDoc(
doc(db,"users",uid)
);


return snap.exists()
?snap.data()
:null;

}
