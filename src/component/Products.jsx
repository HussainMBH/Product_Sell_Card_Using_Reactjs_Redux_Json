import React, { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import productsData from '../productsData.json';
import './Products.css';



export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const componentMounted = useRef(true);

    const products = useSelector((state) => state.products); // Assuming products are in the Redux store

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {

                await new Promise(resolve => setTimeout(resolve, 1000));
                setData(productsData);
                setFilter(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);

            } finally {
                setLoading(false);
            }
        };

        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                </div>

                {filter.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4 glassmorphism">
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">
                                        {product.name}
                                    </h5>
                                    <p className="card-text lead fw-bold mb-0">{product.category}</p>
                                    <p className="card-text lead fw-bold mb-0">${product.price}</p>
                                    <p className="card-text lead fw-bold">Q: {product.quantity}</p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark me-2">
                                        View
                                    </NavLink>
                                    <NavLink to={`/products/${product.id}/edit`} className="btn btn-outline-dark">
                                        Edit
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </>
        );
    };


    return (
        <div>

            <div className="glassmorphism-container container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">{loading ? <Loading /> : <ShowProducts />}</div>
            </div>
        </div>
    );
}
