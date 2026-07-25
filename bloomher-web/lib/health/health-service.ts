import {db} from "@/lib/firebase/client";
import {
collection,
addDoc,
query,
getDocs
} from "firebase/firestore";


export async function addHealthRecord(data:any){
 return addDoc(
  collection(db,"health"),
  data
 );
}


export async function getHealthRecords(){
 const snap =
 await getDocs(
  query(collection(db,"health"))
 );

 return snap.docs.map(
  d=>({
   id:d.id,
   ...d.data()
  })
 );
}
