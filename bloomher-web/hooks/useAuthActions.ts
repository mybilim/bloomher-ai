"use client";

import {
 loginUser,
 registerUser,
 resetPassword,
 logoutUser
} from "@/lib/auth/auth-actions";


export default function useAuthActions(){

 return {
  loginUser,
  registerUser,
  resetPassword,
  logoutUser
 };

}
