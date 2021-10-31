import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUseingGoogle = () => {
       return signInWithPopup(auth, provider);
           
    }

    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        signInUseingGoogle,
        user,
        logOut
    }
}
export default useFirebase;