import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../App';
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [productUpload, setProductUpload] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // Product upload mongodb database
    const onSubmit = product => {
        const newProduct = {
            name: product.name,
            wight: product.wight,
            price: product.price,
            imgURL: productUpload.display_url,
            email: loggedInUser.email
        }
        fetch('https://noboni-mart.herokuapp.com/addProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
            .then(res => {
                if (res) {
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
                setProductUpload(response.data.data);
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='addProduct'>
            <h4>Add Product:</h4>
            <form className=" p-3 mt-2 row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                    <label>Product Name: </label>
                    <input className="form-control" name="name" placeholder="Enter Name" value={productUpload.title} ref={register({ required: true })} /> <br />
                    <label>Product wight: </label>
                    <input className="form-control" name="wight" placeholder="Enter wight" ref={register({ required: true })} /> <br />
                </div>
                <div className="col-md-6">
                    <label>Product Price: </label>
                    <input className="form-control" name="price" placeholder="Enter price" ref={register({ required: true })} /> <br />
                    <label>Add Photo: </label>
                    <input className="form-control" name="image" type="file" onChange={handleAddProduct} /> <br />
                </div>
                <input class="btn btn-primary me-md-2" value='Add Product' type="submit" />
            </form>
        </div>

    );
};

export default AddProduct;