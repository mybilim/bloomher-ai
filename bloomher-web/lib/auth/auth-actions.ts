import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

import { auth } from "@/lib/firebase/client";


export async function loginUser(
 email:string,
 password:string
){
 return await signInWithEmailAndPassword(
   auth,
   email,
   password
 );
}


export async function registerUser(
 email:string,
 password:string
){
 return await createUserWithEmailAndPassword(
   auth,
   email,
   password
 );
}


export async function resetPassword(
 email:string
){
 return await sendPasswordResetEmail(
   auth,
   email
 );
}


export async function logoutUser(){
 return await signOut(auth);
}
