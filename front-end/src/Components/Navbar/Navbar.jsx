import { Container, Row, Col } from 'react-bootstrap';
import './Navbar.css'

const Navbar = () => {
  return (
     <div className='main-navbar'>
      <Container  className='py-3'>
        <Row className='align-items-center justify-content-between fs-5'>
          <Col xs={4} className='d-flex align-items-center gap-2'>
               <i class="bi bi-search"></i>
               <input type="text" className='form-control border-0' placeholder='Search'/>
          </Col>

          <Col xs={4} className='text-center'>
              <h2 className='logo-text'><a href="#" className='logo-link'>SHOPPERS</a></h2>
          </Col>

          <Col xs={4} className='d-flex justify-content-end align-items-center gap-4 '>
              <i className="bi bi-person-fill icon-btn"></i>
              <i className="bi bi-heart icon-btn"></i>
              <i className="bi bi-cart icon-btn"></i>
          </Col>
         
        </Row>
      </Container>
     </div>
  )
}

export default Navbar
