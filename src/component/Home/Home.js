import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
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
    return (
        <div className="container">
            {loading ?
                <div>
                    <Header></Header>
                    <div className="row">
                        {
                            products.map(product => <Products
                                product={product}
                                key={product._id}
                            ></Products>)
                        }
                    </div>

                </div>
                :
                <div className="text-center">
                    <div class="spinner-border text-success" style={{ width: '3rem', height: '3rem', marginTop: '150px' }} role="status">
                    </div>
                </div>
            }

        </div>
    );
};

export default Home;