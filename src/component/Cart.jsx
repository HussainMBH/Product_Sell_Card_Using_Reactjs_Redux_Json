// import React, { useEffect, useRef, useState } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { addToCart } from '../redux/actions';

// import './Products.css';
// import productsData from '../productsData.json';


// // ... (Previous code)

// export default function Products() {
//     const [data, setData] = useState([]);
//     const [filter, setFilter] = useState(data);
//     const [loading, setLoading] = useState(false);
//     const componentMounted = useRef(true);

//     const products = useSelector((state) => state.products); // Assuming products are in the Redux store

//     useEffect(() => {
//         const getProducts = async () => {
//             setLoading(true);
//             try {
//                 // Simulating an API call delay
//                 await new Promise(resolve => setTimeout(resolve, 1000));
//                 setData(productsData);
//                 setFilter(productsData);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//                 // Handle the error (e.g., show an error message to the user)
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getProducts();

//     }, []);
//     const [cartPage, setCartPage] = useState(false);

//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart); // Assuming cart items are in the Redux store

//     const addToCartHandler = (product) => {
//         dispatch(addToCart(product));
//     };

//     const CartPage = () => {
//         return (
//             <div>
//                 <h1>Your Cart</h1>
//                 {cartItems.length === 0 ? (
//                     <p>Your cart is empty</p>
//                 ) : (
//                     <div>
//                         {cartItems.map((item) => (
//                             <div key={item.id}>
//                                 <p>{item.name} - ${item.price}</p>
//                                 <button onClick={() => removeFromCartHandler(item.id)}>Remove</button>
//                             </div>
//                         ))}
//                         <p>Total: ${calculateTotal()}</p>
//                         <button onClick={proceedToCheckoutHandler}>Proceed to Checkout</button>
//                     </div>
//                 )}
//             </div>
//         );
//     };

//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
//     };

//     const removeFromCartHandler = (productId) => {
//         // Dispatch an action to remove the item from the cart
//         // You need to implement this action in your Redux actions
//         // For example, dispatch(removeFromCart(productId));
//     };

//     const proceedToCheckoutHandler = () => {
//         // Implement navigation or any logic for proceeding to checkout
//         // You may want to clear the cart after proceeding
//         // For example, dispatch(clearCart());
//     };

//     const Loading = () => {
//         return (
//             <>
//                 <div className="col-md-3">
//                     <Skeleton height={350} />
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350} />
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350} />
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350} />
//                 </div>
//             </>
//         );
//     };

//     const ShowProducts = () => {
//         const filter = []; // Replace this line with your actual filter logic

//         return (
//             <>
//                 <div className="buttons d-flex justify-content-center mb-5 pb-5">
//                     {/* Add any buttons or elements related to products here */}
//                 </div>

//                 {filter.map((product) => (
//                     <div className="col-md-3 mb-4" key={product.id}>
//                         <div className="card h-100 text-center p-4 glassmorphism">
//                             <div className="card h-100 text-center p-4">
//                                 <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
//                                 <div className="card-body">
//                                     <h5 className="card-title mb-0">
//                                         {product.name}
//                                     </h5>
//                                     <p className="card-text lead fw-bold mb-0">{product.category}</p>
//                                     <p className="card-text lead fw-bold mb-0">${product.price}</p>
//                                     <p className="card-text lead fw-bold">Q: {product.quantity}</p>
//                                     <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark me-2">
//                                         View
//                                     </NavLink>
//                                     <NavLink to={`/products/${product.id}/edit`} className="btn btn-outline-dark">
//                                         Edit
//                                     </NavLink>
//                                     <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </>
//         );
//     };

//     return (
//         <div>
//             {/* Updated styling for the container */}
//             <div className="glassmorphism-container container my-5 py-5">
//                 <div className="row">
//                     <div className="col-12 mb-5">
//                         <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">
//                     {loading ? <Loading /> : (
//                         cartPage ? <CartPage /> : <ShowProducts />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
