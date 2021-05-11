import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { GiftFill, PersonFill, PersonXFill } from 'react-bootstrap-icons'
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
                {productList && productList.length > 0 && !adminMode &&               
                    <span className="icon-wrapper icon-wrapper__gift">
                        <GiftFill className="icon icon--nav icon__gift" onClick={handleToggleDisplay}/>
                        {productList.length}      
                    </span>                        
                }  

                {adminMode 
                    ? (
                        currentUser 
                            ? <Link to="/admin/utloggning" className="icon-wrapper">
                                <PersonXFill className="icon icon--nav icon__admin" />  
                            </Link>
                            : <Link to="/admin" className="icon-wrapper">
                                <PersonFill className="icon icon--nav icon__admin" />                    
                            </Link>
                    )
                    : ""
                }
            </div>
        </Navbar>
	)
}

export default Navigation