import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'

const Booking = () => {

	return (
		<Row className="page-content">
			<Col md={{ span: 9}} lg={{ span: 8}}>
                <h1>Boka upphämtning</h1>

                <p>Här ska det gå att boka upphämtning</p>
                    
                <Link to="/donera">
                    <ArrowLeft className="icon icon__arrow-left"/>                  
                </Link>			
			</Col>	
		</Row>
	)
}
 
export default Booking;