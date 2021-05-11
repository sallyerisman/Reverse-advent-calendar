import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
	return (
		<Row className="page-content">
			<Col className="home-page-text main-col" md={{ span: 9}} lg={{ span: 8}}>	
				<h1>Bakvänd adventskalender</h1>

				<p>Det är svårt att tänka sig att det finns familjer som inte har tillräckligt med mat, men vi på Skåne Stadsmission möter dem varje dag. Din gåva är viktigare än någonsin!</p>

				<p>I år, varför inte ge barn och vuxna som lever i utsatthet en lite bättre jul genom att donera 24 saker - en för varje dag i adventskalendern? Vårt fokus ligger naturligtvis på människors akuta behov som mat och kläder, men vi vill även gärna kunna dela ut julklappar, julmat och julgodis.</p>

				<p>För att se våra största behov just nu och för att börja donera, klicka <Link to='/donera' className="link text-link">här.</Link></p>
			</Col>
		</Row>
	)
}

export default Home

