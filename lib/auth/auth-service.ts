import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "@/lib/firebase/client";

export async function registerUser(
  email: string,
  password: string
) {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
}

export async function loginUser(
  email: string,
  password: string
) {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}

export async function logoutUser() {
  return signOut(auth);
}

export async function resetUserPassword(
  email: string
) {
  return sendPasswordResetEmail(
    auth,
    email
  );
}
