import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import productsData from '../productsData.json';
import './Product.css';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProductToCart = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = () => {
            setLoading(true);
            try {
                const selectedProduct = productsData.find((item) => String(item.id) === id);

                if (selectedProduct) {
                    setProduct(selectedProduct);
                } else {
                    console.error('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        }
        getProduct();
    }, [id]);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    {/* Add skeleton loading for other details */}
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        if (!product) {
            return null;
        }

        return (
            <>

                <div className="col-md-6 product-image-container">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="col-md-6 product-details-container">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.name}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProductToCart(product)}>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go To Cart
                    </NavLink>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}
