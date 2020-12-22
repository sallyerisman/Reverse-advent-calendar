import { useRef, useState } from 'react'
import { Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const { login } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()

		setError(null);

		try {
			// Attempt log in using the specified credentials
			setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value)
			navigate('/admin/redigera')
		} catch (e) {
			setError("Inloggningen misslyckas. Var god kontrollera användaruppgifterna du uppgav.")
			setLoading(false)
		}
	}

	return (
		<Row>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title>Logga in</Card.Title>

						{error && (<Alert variant="danger">{error}</Alert>)}

						<Form onSubmit={handleSubmit}>

							<Form.Group id="email">
								<Form.Label>Mejladress</Form.Label>
								<Form.Control type="email" ref={emailRef} required />
							</Form.Group>

							<Form.Group id="password">
								<Form.Label>Lösenord</Form.Label>
								<Form.Control type="password" ref={passwordRef} required />
							</Form.Group>

							<Button disabled={loading} type="submit" className="btn_log-in">Logga in</Button>
						</Form>
					</Card.Body>
				</Card>

				<Link to="/admin/aterstall-losenord">Glömt ditt lösenord?</Link>
			</Col>
		</Row>
	)
}

export default Login
