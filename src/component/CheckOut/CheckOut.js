import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';


const CheckOut = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { name, price} = product

   

    useEffect(() => {
        const url = `http://localhost:3005/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const [orderDate, setOrderDate] = useState({
        orderDate: new Date()
    })
    const[signInUser, setSignInUser] = useState({
        userName: loggedInUser.displayName,
        email: loggedInUser.email
    })
    const [orderProduct, setOrderProduct] = useState({
        productName: product.name,
        price: product.price,
        wigth: product.wigth,
        imgURL: product.imgURL
    })
    const handleOrder = () => {
        const orderInfo = {...signInUser, ...orderProduct, ...orderDate}
        fetch('http://localhost:3005/addOrder', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(res => {
            if(res){
                alert('Order SuccessFully, Thank You so much..!');
            }
        })
        
    }
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
                        <td colSpan="2">Total</td>
                        <td>$ {price}</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link  onClick ={handleOrder} className="btn btn-success me-md-2">CheckOut</Link>
            </div>
        </div>
    );
};

export default CheckOut;