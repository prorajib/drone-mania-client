import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const history = useHistory();
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut(history);
  };
  return (
    <>
      <Navbar
        className='header-style'
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        sticky='top'
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <i className='fs-3 fw-bold '>
              Drone <span className='word-color'>Mania</span>
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto '>
              <Nav.Link as={Link} to='/home'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/explore'>
                Explore-Product
              </Nav.Link>
              {user?.email && (
                <Nav.Link as={Link} to='/dashboard'>
                  Dashboard
                </Nav.Link>
              )}
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.email ? (
                <span>
                  <span className='username'>{user?.displayName}</span>
                  <span className=' logout' onClick={handleLogOut}>
                    Log Out
                  </span>
                </span>
              ) : (
                <>
                  <Nav.Link as={Link} to='/login' className='fs-5'>
                    Log in
                  </Nav.Link>
                  <Nav.Link as={Link} to='/register' className='fs-5'>
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
