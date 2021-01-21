import { Card } from 'react-bootstrap'

const Contact = () => {
    return ( 
        <>
            <Card className="card__contact">
                <Card.Body>
                    <Card.Title>Gåvoinlämning, Malmö</Card.Title>
                    <Card.Text>
                        <span>Telefon: </span>040-664 22 58
                        <br />
                        <span>E-post: </span>inlamning@skanestadsmission.se
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
                        <span>Telefon: </span>0763-28 76 12
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