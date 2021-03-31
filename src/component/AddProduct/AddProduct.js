import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../App';


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [productImgURL, setProductImgURL] = useState('');
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
// Product upload mongodb database
    const onSubmit = product => {
        const newProduct = {
            name: product.name,
            wight: product.wight,
            price : product.price,
            imgURL: productImgURL,
            email: loggedInUser.email
        }
        fetch('http://localhost:3005/addProducts', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
        .then(res => {
            if(res){
                alert('SuccessFully Added Your Products to MongoDb')
            }
        })  
    };

// upload image File Event handler
    const handleAddProduct = (event) => {
        const imageData = new FormData()
        imageData.set('key', '1e2e9479967e7d1e75e2420a0a5c0c7a');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setProductImgURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <form className="w-50 p-3 m-auto" onSubmit={handleSubmit(onSubmit)}>
            <label>Product Name: </label>
            <input className="form-control" name="name" placeholder="Enter Your Product Name" ref={register({ required: true })} /> <br/>
            <label>Product wight: </label>
            <input className="form-control" name="wight" placeholder="Enter Your Product wigth" ref={register({ required: true })} /> <br/>
            <label>Product Price: </label>
            <input className="form-control" name="price" placeholder="Enter Your Product price" ref={register({ required: true })} /> <br/>
            <input className="form-control" name="image" type="file" onChange ={handleAddProduct} /> <br/>
            <input type="submit" />
        </form>
    );
};

export default AddProduct;