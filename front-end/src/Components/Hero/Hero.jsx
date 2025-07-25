import { Container,Nav, Navbar,Row, Col } from "react-bootstrap"
import './Hero.css'
import Banner from '../../assets/hero_1.jpg.webp';
import Women from '../../assets/women.jpg.webp'
import Men from '../../assets/men.jpg.webp'
import Childern from '../../assets/children.jpg.webp'

const Hero = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="py-3 px-5">
        <Container>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto fw-medium gap-4 option-list">
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#">ABOUT</Nav.Link>
              <Nav.Link href="#">SHOP</Nav.Link>
              <Nav.Link href="#">CATALOGUE</Nav.Link>
              <Nav.Link href="#">NEW ARRIVAL</Nav.Link>
              <Nav.Link href="#">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <div className="banner">
        <img src={Banner} alt="Banner" />
        <div className="banner-text">
            <h2>Finding Your Perfect Shoes</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. {<br />} Ratione tenetur eligendi facere per.</p>
            <button className="shop-button">SHOP NOW</button>
        </div>
        
    </div>
    <div className="grid-options">
        <Container><Row>
        <Col>
            <i class="bi bi-truck fs-1"></i>
                <div className="item">
                    <h3>Free shipping</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus officia modi excepturi consequuntur voluptate fugiat laudantium {<br/>}natus culpa dolorum accusamus quas animi </p>
                </div>
           
        </Col>
        <Col>
             <i class="bi bi-arrow-clockwise fs-1"></i>
                <div className="item2">
                    <h3>Free shipping</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus officia modi excepturi consequuntur voluptate fugiat laudantium {<br/>}natus culpa dolorum accusamus quas animi </p>
                </div>
           
        </Col>
        <Col>
             <i class="bi bi-question-circle-fill fs-1"></i>
                <div className="item2">
                    <h3>Free shipping</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus officia modi excepturi consequuntur voluptate fugiat laudantium {<br/>}natus culpa dolorum accusamus quas animi </p>
                </div>
           
        </Col>
      </Row>
    </Container>   
    </div>

    <div className="image-grid">
         <Container><Row>
        <Col md={4}>
        <div className="image-container">
          <img src={Women} alt="women" className="img-fluid" id="grid-photo1" />
          <div className="img-info">
            <p>COLLECTIONS</p>
            <h3>Women</h3>
          </div>
        </div>
      </Col>

        <Col md={4}>
        <div className="image-container">
          <img src={Men} alt="men" className="img-fluid" id="grid-photo2" />
          <div className="img-info">
            <p>COLLECTIONS</p>
            <h3>Men</h3>
          </div>
        </div>
      </Col>

      <Col md={4}>
        <div className="image-container">
          <img src={Childern} alt="kid" className="img-fluid" id="grid-photo3" />
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
  )
}

export default Hero
