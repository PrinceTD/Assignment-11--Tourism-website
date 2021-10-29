import React from 'react';
import initilizeAuthentication from '../../fireBase/fireBase.int';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Header from '../../Componets/Header/Header';

initilizeAuthentication();

const provider = new GoogleAuthProvider();


const Login = () => {
    const handelGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result =>{
                const user = result.user;
                console.log(user);
            })
    }

    return (
       
        <div>
            <Header></Header>
            <button onClick={handelGoogleSignIn}>google sign in</button>
           
        </div>
    );
};

export default Login;