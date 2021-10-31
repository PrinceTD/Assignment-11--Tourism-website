import React from 'react';
import Header from '../../Componets/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import "./login.css"


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
                <h2 className="m-5 border-card">Plase Login</h2>
                <button className='bg-danger text-light border-0 p-2' onClick={handelGoogleLogin}><i className="fab fa-google pe-2"></i>google sign in</button>
            </div>

        </div>
    );
};

export default Login;