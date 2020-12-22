import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import logo from '../assets/images/logo-skane_stadsmission.png'

const Navigation = () => {
    const { currentUser } = useAuth();

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

                {currentUser 
                    ? <NavLink to="/admin/utloggning">Logga ut</NavLink>
                    : <NavLink to="/admin">Logga in</NavLink>
                }               
            </Container>
        </Navbar>
	)
}

export default Navigation