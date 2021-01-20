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
		<Row>
			<Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
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
				</Form>

				<Link to="/admin/aterstall-losenord">Glömt ditt lösenord?</Link>
			</Col>
		</Row>
	)
}

export default Login
