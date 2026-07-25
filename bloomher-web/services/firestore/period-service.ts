import {
collection,
addDoc,
getDocs
} from "firebase/firestore";

import {db} from "@/lib/firebase/client";


export async function savePeriod(
data:any
){

return addDoc(
collection(db,"periods"),
data
);

}


export async function getPeriods(){

const snap =
await getDocs(
collection(db,"periods")
);

return snap.docs.map(
d=>({
id:d.id,
...d.data()
})
);

}
