import {
 doc,
 setDoc,
 getDoc
} from "firebase/firestore";

import {db} from "@/lib/firebase/client";


export async function saveProfile(
 id:string,
 data:any
){

 await setDoc(
  doc(db,"users",id),
  data,
  {merge:true}
 );

}


export async function getProfile(
 id:string
){

 const snap =
 await getDoc(
  doc(db,"users",id)
 );

 return snap.exists()
 ? snap.data()
 : null;

}
