// Default
import React from 'react';
import beeLogo from '../../assets/images/bee-logo.svg';
import {
  Button,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  NavLink,
  Row,
} from 'react-bootstrap';

const Home = () => {
  return (
    <div className='page'>
      <div className='header'>
        <Navbar bg='dark' expand='lg'>
          <NavbarBrand className='navigationBar'>
            <img
              src={beeLogo}
              width='40'
              height='40'
              className='d-inline-block align-top'
              alt='Beesrealm logo'
            />
          </NavbarBrand>
          <NavLink href='/home'>Home</NavLink>
          <NavLink href='/documentation'>Documentation</NavLink>
          <NavLink href='/play'>Play</NavLink>
        </Navbar>
      </div>

      <div className='mainframe'>
        <Container>
          <Row>
            <Col></Col>
            <Col md lg xl='auto'>
              <h1 className='title'>BeesRealm</h1>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <h5 className='heading'>Conquer the colonies</h5>
            </Col>
          </Row>
          <Row>
            <Col className='button-row'>
              <Button variant='info' href='/play'>
                Play Now
              </Button>
            </Col>
          </Row>
          <Row>
            <Col style={{ color: 'white' }}>Image Here</Col>
            <Col style={{ color: 'white' }}>Image Here</Col>
            <Col style={{ color: 'white' }}>Image Here</Col>
            <Col style={{ color: 'white' }}>Image Here</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
