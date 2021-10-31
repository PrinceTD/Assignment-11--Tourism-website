import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUseingGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.massage)
            })
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
        error,
        logOut
    }
}
export default useFirebase;