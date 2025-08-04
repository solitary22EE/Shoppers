import React from 'react';
import BlogImg from '../../assets/blog_1.jpg.webp';
import './BigSale.css';

const BigSale = () => {
  return (
    <>
      {/* Heading with underline */}
      <div className="container text-center">
        <h2 className="section-title mb-4 heading-line">Big Sale</h2>
      </div>

      {/* Main banner section */}
      <div className="container big-banner mt-4 mb-5">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <img src={BlogImg} alt="blog_image" className="img-fluid rounded" />
          </div>

          {/* Text Column */}
          <div className="col-lg-5">
            <div className="big-text">
              <h2><a href="#">50% less in all items</a></h2>
              <p className="postmeta">
                <span>By <a href="#">Carl Smith</a></span>
                <span className="dot-span mx-2">•</span>
                <span>September 3, 2018</span>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
              <button className="shop_now-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom underline before footer */}
      <hr className="footer-underline" />
    </>
  );
};

export default BigSale;
