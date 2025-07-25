import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Featured.css';

import tankTop from '../../assets/items/cloth_1.jpg.webp';
import shoes from '../../assets/items/shoe_1.jpg.webp';
import poloShirt from '../../assets/items/cloth_2.jpg.webp';

const allProducts = [
  { image: tankTop, name: 'Tank Top', desc: 'Finding perfect t-shirt', price: '$50', link: '#' },
  { image: shoes, name: 'Corater', desc: 'Finding perfect products', price: '$50', link: '#' },
  { image: poloShirt, name: 'Polo Shirt', desc: 'Finding perfect products', price: '$50', link: '#' },
  { image: poloShirt, name: 'New Polo', desc: 'Cool style', price: '$45', link: '#' },
  { image: shoes, name: 'Blue Shoes', desc: 'Casual look', price: '$60', link: '#' },
  { image: tankTop, name: 'Sport Tank', desc: 'Workout gear', price: '$55', link: '#' }
];

const PRODUCTS_PER_PAGE = 3;

const Featured = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + PRODUCTS_PER_PAGE < allProducts.length) {
      setStartIndex(startIndex + PRODUCTS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex - PRODUCTS_PER_PAGE >= 0) {
      setStartIndex(startIndex - PRODUCTS_PER_PAGE);
    }
  };

  const visibleProducts = allProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <section className="featured-section py-5 text-center main-section">
      <h2 className="section-title mb-4 heading-line">Featured Products</h2>
      <Container>
        <Row className="justify-content-center">
          {visibleProducts.map((product, idx) => (
            <Col key={idx} md={4} className="mb-3">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>
                    <a
                      href={product.link}
                      className="product-link"
                    >
                      {product.name}
                    </a>
                  </Card.Title>
                  <Card.Text>{product.desc}</Card.Text>
                  <Card.Text className="text-primary fw-bold">{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Button variant="light" className="arrow-btn" onClick={handlePrev} disabled={startIndex === 0}>
            &#8592;
          </Button>
          <Button
            variant="light"
            className="arrow-btn"
            onClick={handleNext}
            disabled={startIndex + PRODUCTS_PER_PAGE >= allProducts.length}
          >
            &#8594;
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
