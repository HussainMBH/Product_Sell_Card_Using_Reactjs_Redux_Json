import React from 'react'
import Products from './Products';

export default function Home() {
    return (
        <div classNameName='hero'>
            <div className="card bg-dark text-white border-5">
                <img src="https://images.creatopy.com/public/templates/gallery/img/bxkfgis81/High-Quality-Fashion-Banner.jpg" className="card-img" alt="Background" 
                height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div classNameName="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                    <p className="card-text lead fs-2">Check Out All The Trends</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
};
