import React from 'react';
import './Products.css'

const Products = ({product}) => {
    const {name, price, imgURL} = product
    return (
        <div className="col-md-4">
            <div class="card noboni-card h-100">
                <img src={imgURL} alt="..." />
                <div class="card-footer footer-contain" >
                    <h5 class="card-title">{name}</h5>
                    <div class="card-button d-flex justify-content-around align-items-center">
                        <h1><span>${price}</span></h1>
                        <button class="btn button-bg"><i class="fa fa-shopping-cart"
                            aria-hidden="true"></i> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;