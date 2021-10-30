import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import "./AddData.css"
import Header from '../../Componets/Header/Header';
import Footer from '../Footer/Footer';

const AddNewPlace = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("http://localhost:5000/service", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("added a successfullu")
                    reset();
                }
            })
    };

    return (

        <div>
            <div className="container">
            <Header></Header>
            <div className="text-center">
                <h2>Add Your Favourite place</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="addData">
                    <input {...register("name")} placeholder="Place Name" />
                    <textarea {...register("details")} placeholder='Description' />
                    <input type="price" {...register("price")} placeholder='price' />
                    <input type="img" {...register("img")} placeholder='Image Link' />
                    <input type="submit" />
                </form>
            </div>
               
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AddNewPlace;