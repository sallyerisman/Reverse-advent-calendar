import { Card } from 'react-bootstrap'

const Contact = () => {
    return ( 
        <>
        	<h1>Inlämning</h1>

            <Card className="card__contact">
                <Card.Body>
                    <Card.Title>Gåvoinlämning, Malmö</Card.Title>
                    <Card.Text>
                        <span>Telefon: </span><a className="tel-link" href="tel:+4640-664-22-58">040-664 22 58</a>
                        <br />
                        <span>E-post: </span> <a className="link email-link" href={"mailto:inlamning@skanestadsmission.se"}>inlamning@skanestadsmission.se</a>
                        <br />
                        <span>Öppettider: </span>Måndag, onsdag, fredag 8.00-16.00 & tisdag, torsdag 8.00-18.00
                        <br />
                        <span>Adress: </span>Grönegatan 36, Malmö
                    </Card.Text>        
                </Card.Body>
            </Card>

            <Card className="card__contact">
                <Card.Body>
                    <Card.Title>Gåvoinlämning, Kristianstad</Card.Title>
                    <Card.Text>
                        <span>Telefon: </span><a className="tel-link" href="tel:+460763-28-76-12">0763-28 76 12</a>
                        <br />
                        <span>Öppettider: </span>Måndag, onsdag, fredag 8.00-16.00 & tisdag, torsdag 08.00-18.00
                        <br />
                        <span>Adress: </span>Östra Vallgatan 25, Kristianstad 
                </Card.Text>        
                </Card.Body>
            </Card>
        </>
    );
}
 
export default Contact;