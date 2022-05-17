import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import usericon from './user.svg';
import welcome from './welcome.svg';
import './Login.css';

export default function Login() {
  return (
    <Router>
      <div className='subbox'>
      <Container className='mt-5'>
          <Row className='row'>
            <Col lg={4} md={6} sm={12} className="text-center mt-auto mb-auto p-1">
              <img className='icon-img' src={usericon} alt='icon'/>
              <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter User Id" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to={"/Welcome"}><Button className='col-12' variant="primary" type="submit">Login as Student</Button></Link>
                    
                    <div className='mt-1 mb-1'>
                      <small>or</small>
                    </div>
                    <Button className='col-12' variant="primary" type="submit">Login as Professor</Button>
                    
                </Form>
              </Col>
              <Col lg={8} md={6} sm={12} className="text-center">
                <img className='w-100' src={welcome} alt=""/>
              </Col>
          </Row>
      </Container>
      
    </div>
    </Router>
  )
}
