import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDc1EUlzpzVXaMe0zSevwSbO1-c--PxjWw",
    authDomain: "texnomart-f0016.firebaseapp.com",
    projectId: "texnomart-f0016",
    storageBucket: "texnomart-f0016.appspot.com",
    messagingSenderId: "979920921305",
    appId: "1:979920921305:web:37de16f2fbcd7e5cfe14c8",
    measurementId: "G-B0TMR8JLR4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
export function logout() {
    return signOut(auth);
}
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser;
}