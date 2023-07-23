import React from "react";
import { useQuery } from 'react-query';
import axios from "../../API/axios";
import { useParams } from "react-router-dom";
import styles from './style.module.css'
const ProductDetail = (props) => {
    const params = useParams();

    const { isLoading, error, data: productDetail } = useQuery(['product', params.id], () =>
    axios.get(`/products/${params.id}`)
    .then((response) => (response?.data))
);

if (isLoading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error Fetching Product List Data</div>;
}
    return(
        <div className={styles.productDetailSection}>
            <div className="row">
            <a href='/search' className={styles.category}>{productDetail.category}</a>
                <div className="col-md-6">
                    <div className={styles.image}>
                        <img src={productDetail.image} className="card-img-top p-3" alt={productDetail.title} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.wrapper}>
                        <div className="content">
                            <h5 className={styles.title}>{productDetail.title}</h5>
                            <p>{productDetail.description}</p>
                            <p className={styles.cost}>Price: <span className={styles.orange}>${productDetail.price}</span></p>      
                            <p>Rating: {productDetail.rating.rate} / 5</p>          
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.cart} >Add to Cart</button>
                            <button className={styles.buy} >Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;