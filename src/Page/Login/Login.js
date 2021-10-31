import React from 'react';
import Header from '../../Componets/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const { signInUseingGoogle } = useAuth();
    const location =  useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from ||  "/home";

    const handelGoogleLogin = () => {
        signInUseingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (

        <div>
            <Header></Header>
            <div className='text-center'>
                <h2>LogIn</h2>
                <button onClick={handelGoogleLogin} >google sign in</button>
            </div>

        </div>
    );
};

export default Login;