import {db} from "@/lib/firebase/client";
import {
collection,
addDoc,
getDocs
} from "firebase/firestore";


export async function saveMessage(data:any){
return addDoc(
collection(db,"messages"),
data
);
}


export async function getMessages(){
const snap=
await getDocs(
collection(db,"messages")
);

return snap.docs.map(
d=>({
id:d.id,
...d.data()
})
);
}
