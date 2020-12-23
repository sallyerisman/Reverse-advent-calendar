import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useStorage } from '../contexts/StorageContext'
import logo from '../assets/images/logo-skane_stadsmission.png'
import gift from '../assets/images/gift.svg'

const Navigation = () => {
    const { currentUser } = useAuth();
    const { changes, retrieveFromStorage } = useStorage()
    const [productList, setProductList] = useState(null)

    useEffect(() => {
		setProductList(retrieveFromStorage('products'));
	}, [changes]);

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

                {productList &&                 
                    <Link to="/">
                        <span>{productList.length}</span>
                            <img
                                src={gift}
                            />                        
                    </Link>
                }            
            </Container>
        </Navbar>
	)
}

export default Navigation