import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="section-1">
                    <h2>Latest from the blog</h2>
                    <div className="blog-box">
                        <div className="blog-image">
                            <img src="images/image4.jpg" alt="image4" />
                        </div>
                        <h4>Metuervestas mus lacinia</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, voluptatum. Rem nihil aliquid.</p>
                    </div>
                    <div className="blog-box">
                        <div className="blog-image">
                            <img src="images/image4.jpg" alt="image4" />
                        </div>
                        <h4>Metuervestas mus lacinia</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, voluptatum. Rem nihil aliquid.</p>
                    </div>
                </div>
                <div className="section-2">
                    <h2>Company Details</h2>
                    <ul>
                        <li>Company Name</li>
                        <li>Street Name & Number</li>
                        <li>Town</li>
                        <li>Psot Code/Zip</li> <br />
                        <li>Tel: xxxxxxxx</li>
                        <li>Fax: xxxxxxxx</li>
                        <li>Email: <a href="#">contact@mydomain.com</a></li>
                    </ul>
                    <h4>Office hours</h4>
                    <p>Monday - Friday: 8:00 - 17:30</p>
                    <p>Saturday: 8:00 - 13:00</p>
                </div>
                <div className="section-3">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea cols="30" rows="10" placeholder="Message"></textarea>
                        <button className="btn">Submit</button>
                    </form>
                </div>
                <div className="clearfix"></div>
                <div className="copyright">
                    <p className="copy">Copyright &copy; 2013 - All rights reserved - Domain name</p>
                    <p className="design">Designed by me</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;