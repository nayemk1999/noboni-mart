import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import './ManageProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

<i class="fas fa-trash-alt"></i>
const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        const url = 'https://noboni-mart.herokuapp.com/manageProducts?email=' + loggedInUser.email;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(true)
            })

    }, [])

    const deletedProduct = (id) => {
        const url = `https://noboni-mart.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('SuccessFully Delete your Products from Database.')
                }
            })
    }
    return (
        <div className="p-3 w-100 mt-2">
            <h4>Manage Products:</h4>
            <table className="table table-striped ">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Wight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && products.length > 0 ?
                        products.map(product =>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.wight}</td>
                                <td>${product.price}</td>
                                <button className='p-1' onClick={() => deletedProduct(product._id)}><FontAwesomeIcon icon={faTrash} /></button>
                            </tr>
                        )
                        :
                        <div className="text-center">
                            {loading ?
                                <h4 className="mt-3 p-3 text-danger">You haven't any products yet. Please add product and come to this page.</h4>
                                : <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '30%', marginLeft: '60%' }} role="status">
                                </div>
                            }
                        </div>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;