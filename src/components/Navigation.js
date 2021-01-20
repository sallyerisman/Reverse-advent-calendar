import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { GiftFill } from 'react-bootstrap-icons'
import { PersonFill } from 'react-bootstrap-icons'
import logo from '../assets/images/logo.png'
import { useAuth } from '../contexts/AuthContext'
import { useStorage } from '../contexts/StorageContext'

const Navigation = () => {
    const { changes, retrieveFromStorage } = useStorage()
    const [productList, setProductList] = useState(null)

    const { currentUser } = useAuth()

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

            <div className="navlink-wrapper">
                {!currentUser && productList &&                 
                    <span className="icon-wrapper icon-wrapper__gift">
                        <GiftFill className="icon icon--nav icon__gift" onClick={handleToggleDisplay}/>
                        {productList.length}      
                    </span>                        
                }  

                {currentUser 
                    ? <Link to="/admin/utloggning" className="link">Logga ut</Link>
                    : <Link to="/admin" className="icon-wrapper">
                        <PersonFill className="icon icon--nav icon__admin" />                    
                    </Link>
                }
            </div>
        </Navbar>
	)
}

export default Navigation