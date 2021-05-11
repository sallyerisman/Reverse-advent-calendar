import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { Arrow90degLeft } from 'react-bootstrap-icons'

const Booking = () => {

	return (
		<Row className="page-content">
			<Col className="main-col" md={{ span: 9}} lg={{ span: 8}}>
                <h1>Boka upphämtning</h1>

                <p>Här ska det gå att boka upphämtning</p>
                    
                <Link to="/donera">
                    <Arrow90degLeft className="icon icon__arrow-left"/>                  
                </Link>			
			</Col>	
		</Row>
	)
}
 
export default Booking;