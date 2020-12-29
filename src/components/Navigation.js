import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useStorage } from '../contexts/StorageContext'
import adminIcon from '../assets/images/icon-admin.svg'
import giftIcon from '../assets/images/icon-gift.svg'
import logo from '../assets/images/logo-skane_stadsmission.png'

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

                {!currentUser && productList &&                 
                    <span>
                        {productList.length}
                        <img src={giftIcon}/>
                    </span>                        
                }  

                {currentUser 
                    ? <Link to="/admin/utloggning">Logga ut</Link>
                    : <Link to="/admin">
                        <img src={adminIcon} />                        
                    </Link>
                }           
            </Container>
        </Navbar>
	)
}

export default Navigation