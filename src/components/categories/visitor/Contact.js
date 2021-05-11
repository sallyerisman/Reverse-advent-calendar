import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'

const Contact = () => {
    return ( 
        <Row className="page-content">
            <Col md={{ span: 10}} lg={{ span: 8}}>
                <h1>Inlämning</h1>

                <Card className="card__contact">
                    <Card.Body>
                        <Card.Title>Gåvoinlämning, Malmö</Card.Title>
                        <Card.Text>
                            <p><span>Telefon: </span><a className="tel-link" href="tel:+4640-664-22-58">040-664 22 58</a></p>

                            <p><span>E-post: </span> <a className="link email-link" href={"mailto:inlamning@skanestadsmission.se"}>inlamning@skanestadsmission.se</a></p>

                            <p><span>Öppettider: </span>Måndag, onsdag, fredag 8.00-16.00 & tisdag, torsdag 8.00-18.00</p>

                            <p><span>Adress: </span>Grönegatan 36, Malmö</p>
                        </Card.Text>        
                    </Card.Body>
                </Card>

                <Card className="card__contact">
                    <Card.Body>
                        <Card.Title>Gåvoinlämning, Kristianstad</Card.Title>
                        <Card.Text>
                            <p><span>Telefon: </span><a className="tel-link" href="tel:+460763-28-76-12">0763-28 76 12</a></p>
                            
                            <p><span>Öppettider: </span>Måndag, onsdag, fredag 8.00-16.00 & tisdag, torsdag 08.00-18.00</p>
                        
                            <p><span>Adress: </span>Östra Vallgatan 25, Kristianstad</p>
                    </Card.Text>        
                    </Card.Body>
                </Card>

                <Link to="/donera">
                    <ArrowLeft className="icon icon__arrow-left"/>                  
                </Link>
            </Col>	
        </Row>
    );
}
 
export default Contact;