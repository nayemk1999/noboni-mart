import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = `http://localhost:3005/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(true)
            })

    }, [])

    const deletedProduct = (id) =>{
        const url = `http://localhost:3005/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Wight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => 
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.wight}</td>
                                <td>${product.name}</td>
                                <button onClick={() =>deletedProduct(product._id)}>D</button>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;