// src/Components/Hero/Hero.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

import Banner from '../../assets/hero_1.jpg.webp';
import Women from '../../assets/women.jpg.webp';
import Men from '../../assets/men.jpg.webp';
import Children from '../../assets/children.jpg.webp';

const Hero = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="banner">
        <img src={Banner} alt="Banner" />
        <div className="banner-text">
          <h2>Finding Your Perfect Shoes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Ratione tenetur eligendi facere per.
          </p>
          <button className="shop-button">SHOP NOW</button>
        </div>
      </div>

      {/* Feature Info Grid */}
      <div className="grid-options">
        <Container>
          <Row>
            <Col>
              <i className="bi bi-truck fs-1"></i>
              <div className="item">
                <h3>Free shipping</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus officia modi excepturi consequuntur voluptate
                  fugiat laudantium
                  <br />
                  natus culpa dolorum accusamus quas animi
                </p>
              </div>
            </Col>

            <Col>
              <i className="bi bi-arrow-clockwise fs-1"></i>
              <div className="item2">
                <h3>Free returns</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus officia modi excepturi consequuntur voluptate
                  fugiat laudantium
                  <br />
                  natus culpa dolorum accusamus quas animi
                </p>
              </div>
            </Col>

            <Col>
              <i className="bi bi-question-circle-fill fs-1"></i>
              <div className="item2">
                <h3>Customer support</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus officia modi excepturi consequuntur voluptate
                  fugiat laudantium
                  <br />
                  natus culpa dolorum accusamus quas animi
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Category Image Grid */}
      <div className="image-grid">
        <Container>
          <Row>
            <Col md={4}>
              <div className="image-container">
                <img
                  src={Women}
                  alt="Women"
                  className="img-fluid"
                  id="grid-photo1"
                />
                <div className="img-info">
                  <p>COLLECTIONS</p>
                  <h3>Women</h3>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="image-container">
                <img
                  src={Men}
                  alt="Men"
                  className="img-fluid"
                  id="grid-photo2"
                />
                <div className="img-info">
                  <p>COLLECTIONS</p>
                  <h3>Men</h3>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="image-container">
                <img
                  src={Children}
                  alt="Children"
                  className="img-fluid"
                  id="grid-photo3"
                />
                <div className="img-info">
                  <p>COLLECTIONS</p>
                  <h3>Children</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
