import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const OrderMange = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(orders);
    useEffect(() => {
        fetch('https://noboni-mart.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='container'>
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
                            orders.map(order =>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{(new Date(order.orderDate).toDateString('dd/MM/yyyy'))}</td>
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