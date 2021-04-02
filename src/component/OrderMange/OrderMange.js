import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const OrderMange = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://noboni-mart.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='container'>
            <Header></Header>
            <div>
                <h2 className="fw-bold mt-5 text-center" style={{ color: 'crimson' }}>Your Order Details:</h2>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { orders.length > 0 ?
                            orders.map(order =>
                                <tr class="table-success">
                                    <td>{order.name}</td>
                                    <td>$ {order.price}</td>
                                    <td>{(new Date(order.orderDate).toDateString('dd/MM/yyyy'))}</td>
                                </tr>
                            ) 
                            :
                            <h4 className="text-center mt-3 text-danger">You haven't placed any orders yet. Please order and come to this page.</h4> 
                        }
                    </tbody>
                </table>
                <h2 className="fw-bold mt-5 text-center" style={{ color: 'black' }}>Total Your Order Items: <span className='text-danger'>{orders.length}</span></h2>
            </div>
        </div>
    );
};

export default OrderMange;