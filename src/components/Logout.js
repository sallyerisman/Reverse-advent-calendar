import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

const Logout = () => {
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const { logout } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()

		setError(null);

		try {
			// Attempt log out of current user
			setLoading(true)
			await logout()
			navigate('/admin')
		} catch (e) {
			setError("Utloggningen misslyckas. Var god försök igen.")
			setLoading(false)
		}
	}

	return (		
		<Row>
			<Col>
				{error && <Alert variant="danger">{error}</Alert>}

				<h2>Är du säker på att du vill logga ut?</h2>

				<Form onSubmit={handleSubmit} className="logout-form">
					<Button disabled={loading} type="submit" className="btn btn__log-out">Ja, logga ut mig</Button>					
					<Link to="/admin/redigera">Nej, ta mig tillbaka till redigeringsvyn</Link>
				</Form>
			</Col>
		</Row>		
	)
}

export default Logout


