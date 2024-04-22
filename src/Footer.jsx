import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footers() {
  return (
    <footer className='mt-5'>
        <Container fluid className='p-4 bg-black text-white'>
            <Row className=''>
                <Col xs={2}>
                    <div className='d-block'>
                        <div className='text-secondary fw-bold '>Deck. </div>
                        <div className='text-secondary fw-medium' style={{fontSize:".8rem"}}>2018 Deck</div>
                        <div className='text-secondary fw-medium ' style={{fontSize:".8rem"}}>Component based UI kit</div>
                    </div>
                </Col>
                <Col>
                    <p><a href="" className='text-reset text-decoration-none'>TECHNOLOGY</a></p>
                    <p><a href="" className='text-reset text-decoration-none'>IDEAS</a></p>
                </Col>
                <Col>
                    <p><a href="" className='text-reset text-decoration-none'>LEADERSHIP</a></p>
                   <p><a href="" className='text-reset text-decoration-none'>VIDEO</a></p>
                    
                </Col>
                <Col>
                    <p><a href="" className='text-reset text-decoration-none'>NEWS</a></p>
                    <p><a href="" className='text-reset text-decoration-none'>FINANCE</a></p>
                </Col>
                <Col>
                    <p><a href="" className='text-reset text-decoration-none'>ENTERTAINMENT</a></p>
                </Col>
                <Col xs={3} className='text-end'>
                    <div className='text-secondary fw-medium' style={{fontSize:".8rem"}}>
                        <span>Follow Us on</span>
                        <a href="" className='text-decoration-none m-1 text-reset'><i className="bi bi-instagram"></i></a>
                        <a href="" className='text-decoration-none m-1 text-reset'><i class="bi bi-pinterest"></i></a>
                        <a href="" className='text-decoration-none m-1 text-reset'><i class="bi bi-twitter"></i></a>
                        <a href="" className='text-decoration-none m-1 text-reset'><i class="bi bi-facebook"></i></a>
                    </div>
                </Col>

            </Row>
        </Container>
    </footer>
  )
}

export default Footers