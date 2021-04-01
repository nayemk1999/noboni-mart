import React from 'react';
import './Products.css'
import { Link, useParams } from "react-router-dom";
const Products = ({ product }) => {
    const { id } = useParams();
    const { name, price, imgURL, _id } = product

    return (
        <div className="col-md-4">
            <div class="card noboni-card h-100">
                <img src={imgURL} alt="..." />
                <div class="card-footer footer-contain" >
                    <h5 class="card-title">{name}</h5>
                    <div class="card-button d-flex justify-content-around align-items-center">
                        <h1><span>${price}</span></h1>
                        <Link to={"/buy-product/" + _id} class="btn button-bg"><i class="fa fa-shopping-cart"
                            aria-hidden="true"></i>Buy Now</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Products;