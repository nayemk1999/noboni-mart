import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


const CheckOut = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const { name, price } = product
    useEffect(() => {
        const url = `http://localhost:3005/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return (
        <div className="container">
            <Header></Header>
            <h1>CheckOut</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>1</td>
                        <td>$ {price}</td>
                    </tr>
                    <tr>
                        <td colspan="2">Total</td>
                        <td>$ {price}</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to= '/order' class="btn btn-success me-md-2" type="button">CheckOut</Link>
            </div>
        </div>
    );
};

export default CheckOut;