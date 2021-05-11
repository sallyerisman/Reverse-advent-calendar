import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
	const emailRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const { login } = useAuth()
	const navigate = useNavigate()
	const passwordRef = useRef()

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
		<Row className="page-content">
			<Col md={{ span: 8}} lg={{ span: 6}}>
				<h1>Logga in</h1>

				{error && <Alert variant="danger">{error}</Alert>}

				<Form onSubmit={handleSubmit}>
					<Form.Group id="email">
						<Form.Label>Mejladress</Form.Label>
						<Form.Control type="email" ref={emailRef} required />
					</Form.Group>

					<Form.Group id="password">
						<Form.Label>Lösenord</Form.Label>
						<Form.Control type="password" ref={passwordRef} required />
					</Form.Group>

					<div className="button-wrapper">						
						<Button disabled={loading} type="submit" className="button__primary">Logga in</Button>
					</div>

					<div className="link-wrapper">						
						<Link to="/admin/aterstall-losenord" className="link text-link">Glömt ditt lösenord?</Link>
					</div>
					<div className="link-wrapper">						
						<Link to="/donera" className="link text-link">Ta mig till besöksvyn</Link>
					</div>
				</Form>
			</Col>
		</Row>
	)
}

export default Login
