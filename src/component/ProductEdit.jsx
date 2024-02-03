import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import productsData from '../productsData.json';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedCategory, setEditedCategory] = useState('');
    const [editedPrice, setEditedPrice] = useState('');
    const [editedQuantity, setEditedQuantity] = useState('');
    const [notification, setNotification] = useState('');

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
                    setEditedName(selectedProduct.name);
                    setEditedCategory(selectedProduct.category);
                    setEditedPrice(selectedProduct.price);
                    setEditedQuantity(selectedProduct.quantity || 0);
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

    const handleNameChange = (e) => {
        setEditedName(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setEditedCategory(e.target.value);
    }

    const handlePriceChange = (e) => {
        setEditedPrice(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setEditedQuantity(e.target.value);
    }

    const saveChanges = () => {

        const updatedProducts = productsData.map((item) => {
            if (String(item.id) === id) {
                return {
                    ...item,
                    name: editedName,
                    category: editedCategory,
                    price: editedPrice,
                    quantity: editedQuantity,
                };
            }
            return item;
        });


        setProduct({
            ...product,
            name: editedName,
            category: editedCategory,
            price: editedPrice,
            quantity: editedQuantity,
        });
        setNotification('Changes saved successfully!');
    }

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>

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
                    <h4 className="text-uppercase text-black-50">Product Details</h4>
                    <h1 className="display-20">
                        Name: <input type="text" value={editedName} onChange={handleNameChange} />
                    </h1>
                    <p className="lead fw-bolder">
                        Rating: {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-16 fw-bold my-1">
                        Price: <input type="text" value={editedPrice} onChange={handlePriceChange} />
                    </h3>
                    <p className="lead display-16 fw-bold my-3">
                        Quantity: <input type="number" value={editedQuantity} onChange={handleQuantityChange} />
                    </p>
                    <button className="btn btn-primary px-4 py-2 mt-2" onClick={saveChanges}>
                        Save Changes
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go To Cart
                    </NavLink>

                    {notification && (
                        <div className="alert alert-success mt-2" role="alert">
                            {notification}
                        </div>
                    )}
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
