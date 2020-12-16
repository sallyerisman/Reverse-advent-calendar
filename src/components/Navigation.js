import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/logo-skane_stadsmission.png'

const Navigation = () => {

	return (
        <Navbar>
            <Container>
                <Link to="/">
                    <img
                        alt="Skåne Stadmission"
                        src={logo}
                        className="page-logo"
                    />
                </Link>

                <NavLink to="/inloggning">Logga in</NavLink>
            </Container>
        </Navbar>
	)
}

export default Navigation