import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';


const CheckOut = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { name, price } = product
    useEffect(() => {
        const url = `https://noboni-mart.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const [orderDate, setOrderDate] = useState({
        orderDate: new Date()
    })
    const [signInUser, setSignInUser] = useState({
        userName: loggedInUser.displayName,
        email: loggedInUser.email
    })
    const handleOrder = () => {
        const orderInfo = { ...signInUser, name: product.name, price: product.price, ...orderDate }
        fetch('https://noboni-mart.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => {
                if (res) {
                    alert('Order SuccessFully, Thank You so much..!');
                    history.push('/order')
                }
            })

    }
    return (
        <div className="container">
            <Header></Header>
            <h2 className="fw-bold mt-5 text-center" style={{color:'crimson'}}>Check-Out</h2>
            <table className="table ">
                <thead className='thead-dark'>
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
                    <tr className="table-success">
                        <td colSpan="2" className='fw-bold fs-2'>Total</td>
                        <td>$ {price}</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link onClick={handleOrder} className="btn btn-success me-md-2">CheckOut</Link>
            </div>
        </div>
    );
};

export default CheckOut;