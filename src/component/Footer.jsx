import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';




const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba' }}>
            <div className="container p-4">
                <section className="">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">DiliMatrix</h6>
                            <p>
                                We're the IT solutions provider, offering innovative services to boost your business in the digital age. Our expert team is committed to guiding you smoothly through your digital transformation.
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p>
                                <a className="text-white">Software Development</a>
                            </p>
                            <p>
                                <a className="text-white">Web Development</a>
                            </p>
                            <p>
                                <a className="text-white">Cloud Services</a>
                            </p>
                            <p>
                                <a className="text-white">IT Consulting</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><FontAwesomeIcon icon={faHome} className="mr-3" /> Batticaloa, Eastern</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="mr-3" /> info@dilimatrix.com</p>
                            <p><FontAwesomeIcon icon={faPhone} className="mr-3" /> +94 70 6161 231</p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>

                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>

                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>

                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>

                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                        </div>
                    </div>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <a className="text-white" href="https://www.dilimatrix.com/">
                    DiliMatrix
                </a>
            </div>
        </footer>
    );
};

export default Footer;
