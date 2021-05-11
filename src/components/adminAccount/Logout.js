import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'
import { useAuth } from '../../contexts/AuthContext'

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
		<Row className="page__logout">
			<Col md={{ span: 10 }} lg={{ span: 6 }}>
				{error && <Alert variant="danger">{error}</Alert>}

				<h1 className="h2">Är du säker på att du vill logga ut?</h1>

				<Form onSubmit={handleSubmit} className="form">
					<div className="button-wrapper align-center">						
						<Button disabled={loading} type="submit" className="button__primary">Ja, logga ut mig</Button>	
					</div>	

					<div className="link-wrapper align-center">	
						<Link to="/admin/redigera" className="link text-link">
							<ArrowLeft className="icon icon__text-arrow" />Nej, ta mig tillbaka till redigeringsvyn 
                 
						</Link>						
					</div>					
				</Form>
			</Col>
		</Row>		
	)
}

export default Logout


