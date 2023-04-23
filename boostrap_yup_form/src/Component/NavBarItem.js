import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBarItem() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                </Link>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='text-light'> <Link style={{ textDecoration: 'none', color: 'inherit' }}  to="/login">Login</Link></Nav.Link>
                    <Nav.Link className='text-light'> <Link style={{ textDecoration: 'none', color: 'inherit' }}  to="/regi">Sign-in</Link></Nav.Link>
                    <Nav.Link className='text-light'> <Link style={{ textDecoration: 'none', color: 'inherit' }}  to="/todolist">Todo-List</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
