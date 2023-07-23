import React from "react";
import { useQuery } from 'react-query';
import axios from "../../API/axios";
import styles from './style.module.css';
import { Link } from "react-router-dom";
import routes from '../../route/route'
const ProductList = () => {
    const { isLoading, error, data: products } = useQuery('products', () =>
        axios.get('/products')
        .then((response) => (response?.data))
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error Fetching Product List Data</div>;
    }


   
    return (
<>
        <div className="container mt-4">
            <div className="row g-3">
                {products.map((product) => (
                    <div key={product.id} className="col-lg-4 col-md-6">
                        <Link to={routes.product_detail.path(product.id)} className={styles.card} >
                            <div className="card lg-4 md-6 h-100">
                                <div className={styles.cardImage}>
                                    <img src={product.image} className="card-img-top p-3" alt={product.title} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                    {product?.title?.length >  40?
                                        `${product?.title?.substring(0, 40)}...` : product?.title
                                    }
                                    </h5>
                                    <div className={styles.cardText}>
                                        <p className="card-text">Price: <span className={styles.orange}>${product.price}</span></p>       
                                        <p className="card-text">Rating: {product.rating.rate} / 5</p>                    
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
</>
    )
}
export default ProductList;