import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Contact = () => {
    return ( 
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Gåvoinlämning, Malmö</Card.Title>
                    <Card.Text>
                        <span>Telefon: </span>040-664 22 58
                        <br />
                        <span>E-post: </span>inlamning@skanestadsmission.se
                        <br />
                        <span>Öppettider: </span>Måndag, onsdag, fredag 8.00-16.00 och tisdag, torsdag 8.00-18.00
                        <br />
                        <span>Adress: </span>Grönegatan 36, Malmö
                    </Card.Text>        
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Gåvoinlämning, Kristianstad</Card.Title>
                    <Card.Text>
                        <span>Telefon: </span>0763-28 76 12
                        <br />
                        <span>Öppettider: </span>Måndag, onsdag, fredag 08.00-16.00 & tisdag, torsdag 08.00-18.00
                        <br />
                        <span>Adress: </span>Östra Vallgatan 25, Kristianstad 
                </Card.Text>        
                </Card.Body>
            </Card>

            <Link to='/donera'>Tillbaka till kategorier</Link>
        </>
    );
}
 
export default Contact;