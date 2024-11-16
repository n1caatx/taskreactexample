import React, { useEffect, useState } from "react";
import styles from './task.module.css';
import axios from "axios";

const Task = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching the data:", error);
            });
    }, []); 

    return (
        <div className={styles.body}>
            {products.map((product) => (
                <div className={styles.cards} key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
};

export default Task;
