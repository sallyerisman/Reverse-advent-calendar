import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
	return (
        <footer className="footer">
            <Container>
                <Row className="footer-content-wrapper">
                    <Col md={{ span: 4 }} className="footer-text">
                        <h2>Dina pengar når fram</h2>
                        <p>Skåne Stadsmission har 90-konto och är medlemmar i Giva Sverige.</p>
                        <p>Gåvobankbankgiro: 900-3252</p>
                        <p>Swish: 900 3252</p>
                    </Col>
                    <Col md={{ span: 4 }} className="footer-text">
                        <h2>Kontakta oss</h2>
                        <p>Skåne Stadsmission
                            <br />
                            Korsgatan 14 | 211 32 Malmö
                        </p>
                        <p>Vxl<a className="tel-link" href="tel:+4640-664-22-40"> 040-664 22 40</a>
                            <br />
                            <a className="link text-link" href={"mailto:info@skanestadsmission.se"}>info@skanestadsmission.se</a>
                        </p>
                        <p>Org.nr 846004-8716
                            <br />
                            <a className="link text-link" href={"mailto:faktura@skanestadsmission.se"}>faktura@skanestadsmission.se</a>
                        </p>
                    </Col>

                    <Col md={{ span: 4 }} className="footer-text">
                        <h2>Följ oss</h2>
                        <p className="extra-margin">
                            <a className="link text-link" href="https://www.facebook.com/skanestadsmission/">Facebook</a> |   
                            <a className="link text-link" href="https://www.instagram.com/skanestadsmission/?hl=sv"> Instagram</a> |  
                            <a className="link text-link" href="https://www.linkedin.com/company/skane-stadsmission"> Linkedin</a> | 
                            <a className="link text-link" href="https://twitter.com/SkaStadsmission"> Twitter</a> | 
                            <a className="link text-link" href="http://www.skanestadsmission.se/press/"> Press</a>

                            <br />

                            Prenumerera på vårt <a className="link text-link" href="https://www.skanestadsmission.se/nyheter/">nyhetsbrev!</a>
                        </p>        

                        <h2>Personuppgifter</h2>
                        <p>Läs vår <a className="link text-link" href={"https://www.skanestadsmission.se/integritetspolicy-2/"}>integritetspolicy</a> för att få veta mer om hur vi behandlar dina personuppgifter.</p>
                    </Col>
                </Row>
            </Container>
        </footer >
	)
}

export default Footer