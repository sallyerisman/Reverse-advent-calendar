import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { GiftFill, PersonXFill } from 'react-bootstrap-icons'
import logo from '../assets/images/logos/logo.png'
import { useAuth } from '../contexts/AuthContext'
import { useStorage } from '../contexts/StorageContext'

const Navigation = () => {
    const [adminMode, setAdminMode] = useState(false)
    const [productList, setProductList] = useState(null)

    const { currentUser } = useAuth()
    const { changes, retrieveFromStorage } = useStorage()
    
    useEffect(() => {
        if (window.location.toString().includes("admin")) {
            setAdminMode(true)
        } else {
            setAdminMode(false)
        }

        if (currentUser) {
            const sidebar = document.getElementsByClassName('sidebar');
            sidebar[0].classList.remove('show');
        }

    }, []);

    useEffect(() => {
		setProductList(retrieveFromStorage('products'));
    }, [changes]);

    const handleToggleDisplay = () => {
        const sidebar = document.getElementsByClassName('sidebar');
        sidebar[0].classList.toggle('show');
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
                {productList && productList.length > 0 &&             
                    <span className="icon-wrapper icon-wrapper__gift">
                        <GiftFill className="icon icon--nav icon__gift" onClick={handleToggleDisplay}/>
                        {productList.length}      
                    </span>                        
                }

                {currentUser
                    ? (
                        <Link to="/admin/utloggning" className="icon-wrapper">
                            <PersonXFill className="icon icon--nav icon__admin" />  
                        </Link>
                    )
                    : ""           
                }  
            </div>
        </Navbar>
	)
}

export default Navigation