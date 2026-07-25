import {
 collection,
 addDoc
} from "firebase/firestore";

import {db} from "@/lib/firebase/client";


export async function addHealthRecord(
 data:any
){

 return await addDoc(
  collection(db,"health"),
  data
 );

}
