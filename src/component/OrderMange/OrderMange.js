import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const OrderMange = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(orders);
    useEffect(() => {
        fetch('http://localhost:3005/order?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div className ='container'>
            <Header></Header>
            <div>
                <h2 className='text-center'>Your Order Details:</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(product => 
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{(new Date(product.orderDate).toDateString('dd/MM/yyyy'))}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default OrderMange;