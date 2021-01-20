import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import { GiftFill } from 'react-bootstrap-icons';
import { PersonFill } from 'react-bootstrap-icons';
import logo from '../assets/images/logo.png'
import { useAuth } from '../contexts/AuthContext'
import { useStorage } from '../contexts/StorageContext'

const Navigation = () => {
    const { currentUser } = useAuth();
    const { changes, retrieveFromStorage } = useStorage()
    const [productList, setProductList] = useState(null)

    useEffect(() => {
		setProductList(retrieveFromStorage('products'));
    }, [changes]);

    const handleToggleDisplay = () => {
        const sidebar = document.getElementsByClassName('sidebar');
        sidebar[0].classList.toggle('hide');
    }

	return (
        <Navbar className="navigation container">
            <Link to="/">
                <img
                    alt="Skåne Stadmission"
                    src={logo}
                    className="logo"
                />
            </Link>

            {!currentUser && productList &&                 
                <span>
                    {productList.length}
                    <GiftFill className="icon icon__gift" onClick={handleToggleDisplay} />      
                </span>                        
            }  

            {currentUser 
                ? <Link to="/admin/utloggning">Logga ut</Link>
                : <Link to="/admin" className="icon-wrapper">
                        <PersonFill className="icon icon__admin" />                    
                </Link>
            }           
        </Navbar>
	)
}

export default Navigation