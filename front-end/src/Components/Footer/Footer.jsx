import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
       <div className="container footer-main">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-unstyled">
              <p className="fw-bold">Navigation</p>
              <li>Sell online</li>
              <li>Features</li>
              <li>Shopping cart</li>
              <li>Store builder</li>
            </ul>
          </div>

          <div className="col-md-3 list">
            <ul className="list-unstyled">
              <li>Mobile commerce</li>
              <li>Dropshipping</li>
              <li>Website development</li>
            </ul>
          </div>

          <div className="col-md-3 list">
            <ul className="list-unstyled">
              
              <li>Mobile commerce</li>
              <li>Dropshipping</li>
              <li>Website development</li>
            </ul>
          </div>

          <div className="col-md-3 ">
            <ul className="list-unstyled" id='details-list'>
              <p className="fw-bold">Contact info</p>
              <li>
                <i class="bi bi-geo-alt-fill"></i>
                <p>203 Fake St. Mountain View, San Francisco, California, USA </p>
              </li>
              <li>
                <i class="bi bi-telephone-fill"></i>
                <p><a href="">+91 1234567890</a></p>
              </li>
              <li>
                <i class="bi bi-envelope-fill"></i>
                <p>emailaddress@domain.com</p>
              </li>
              <p className='subscribe-heading'>Subscribe</p>
              <li>
                <input type="email" placeholder='Email' className='email-field'/>
                <button>SEND</button>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer
