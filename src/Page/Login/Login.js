import React from 'react';
import Header from '../../Componets/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUseingGoogle } = useAuth();
    return (

        <div>
            <Header></Header>
            <div className='text-center'>
                <h2>LogIn</h2>
                <button onClick={signInUseingGoogle} >google sign in</button>
            </div>

        </div>
    );
};

export default Login;