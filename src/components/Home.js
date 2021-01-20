import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
	return (
		<Row>
			<Col>	
				<h1>Donera 24 saker till jul</h1>

				<p>Det är svårt att tänka sig att det finns familjer som inte har tillräckligt med mat, men vi på Skåne Stadsmission möter dem varje dag. Din gåva är viktigare än någonsin!</p>

				<p>Detta året, varför inte hjälpa oss ge barn och vuxna som lever i utsatthet en lite bättre jul, genom att donera 24 saker - en för varje dag i adventskalendern? Vårt fokus ligger naturligtvis på människors akuta behov som mat och kläder, men vi vill även gärna kunna dela ut julklappar, julmat och julgodis.</p>

				<p>För att se vilka behov som är störst just nu och för att börja donera, klicka <Link to='/donera' className="link text-link">här.</Link></p>
			</Col>
		</Row>
	)
}

export default Home

