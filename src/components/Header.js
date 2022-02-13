import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar className=' headerBgColor' variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className='headerText'>Pokrmon</Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
