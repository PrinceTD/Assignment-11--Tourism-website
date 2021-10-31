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
        axios.post("https://thawing-meadow-37880.herokuapp.com/service", data)
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
                    <form onSubmit={handleSubmit(onSubmit)} className="addData mt-5">
                        <input className="mb-3 style-border" {...register("name")} placeholder="Place Name" required />
                        <textarea className="mb-3  style-border" {...register("details")} placeholder='Description' required />
                        <input className="mb-3 style-border" type="price" {...register("price")} placeholder='price' required />
                        <input className="mb-3 style-border" type="img" {...register("img")} placeholder='Image Link' required />
                        <input className="btn" type="submit" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddNewPlace;