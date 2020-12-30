import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<h2>24 saker att ge bort till jul</h2>
			
			<p>Det är svårt att tänka sig att det finns familjer som inte har tillräckligt med mat, men vi på Skåne Stadsmission möter dem varje dag. Din gåva är viktigare än någonsin!</p>

			<p>Detta året, varför inte hjälpa oss ge barn och vuxna som lever i utsatthet en lite bättre jul, genom att donera 24 saker till jul? Vårt fokus ligger naturligtvis på människors akuta behov som mat och kläder, men vi vill även gärna kunna dela ut julklappar, julmat och julgodis. Din gåva gör skillnad!</p>

			<p>För att se vilka behov som är störst just nu och för att börja donera, klicka <Link to='/donera'>här</Link>.</p>
			
		</div>
	)
}

export default Home
