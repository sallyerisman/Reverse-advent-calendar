import { useState } from 'react'
import { Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
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
				<Card>
					<Card.Body>
						{error && (<Alert variant="danger">{error}</Alert>)}
						<Card.Title>Är du säker på att du vill logga ut?</Card.Title>

						<Form onSubmit={handleSubmit} className="logout-form">
							<Button disabled={loading} type="submit" className="btn_log-out">Ja, logga ut mig</Button>
							
							<Link to="/admin/redigera">Nej, ta mig tillbaka till redigeringsvyn</Link>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>		
	)
}

export default Logout


