import { db } from "@/lib/firebase/client";
import {
  doc,
  setDoc,
  getDoc
} from "firebase/firestore";


export async function createProfile(
 uid:string,
 data:any
){
 await setDoc(
  doc(db,"users",uid),
  data,
  {merge:true}
 );
}


export async function getProfile(uid:string){
 const snap = await getDoc(
  doc(db,"users",uid)
 );

 return snap.exists()
 ? snap.data()
 : null;
}
