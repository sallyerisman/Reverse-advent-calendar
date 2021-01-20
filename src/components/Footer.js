import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
	return (
        <footer className="footer">
            <Container>
                <Row className="footer-content-wrapper footer-text">
                    <Col md={{ span: 4 }}>
                        <h2>Dina pengar når fram</h2>
                        <p>Skåne Stadsmission har 90-konto och är medlemmar i Giva Sverige.</p>
                        <p>Gåvobankbankgiro: 900-3252
                            Swish: 900 3252
                        </p>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <h2>Kontakta oss</h2>
                        <p>Skåne Stadsmission
                            <br></br>
                            Korsgatan 14 | 211 32 Malmö
                        </p>
                        <p>Vxl 040-664 22 40
                            <br></br>
                            <a className="link text-link" href={"mailto:info@skanestadsmission.se"}>info@skanestadsmission.se</a>
                        </p>
                        <p>Org.nr 846004-8716
                            <br></br>
                            <a className="link text-link" href={"mailto:faktura@skanestadsmission.se"}>faktura@skanestadsmission.se</a>
                        </p>
                    </Col>

                    <Col md={{ span: 4 }}>
                        <h2>Följ oss</h2>
                        <p>
                            <a className="link text-link" href="https://www.facebook.com/skanestadsmission/">Facebook</a> |   
                            <a className="link text-link" href="https://www.instagram.com/skanestadsmission/?hl=sv"> Instagram</a> |  
                            <a className="link text-link" href="https://www.linkedin.com/company/skane-stadsmission"> Linkedin</a> | 
                            <a className="link text-link" href="https://twitter.com/SkaStadsmission"> Twitter</a> | 
                            <a className="link text-link" href="http://www.skanestadsmission.se/press/"> Press</a>
                        </p>
                        <p>Prenumerera på vårt nyhetsbrev!</p>
                        <h2>Personuppgifter</h2>
                        <p>Läs vår integritetspolicy för att få veta mer om hur vi behandlar dina personuppgifter.</p>
                    </Col>
                </Row>
            </Container>
        </footer >
	)
}

export default Footer