import { useState } from 'react'
import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'

const CreateCategory = () => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [title, setTitle] = useState("")
	const navigate = useNavigate()

	const handleTitleChange = (e) => {
		setTitle(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (title.length < 3) {
			return;
		}

		setError(false)
		setLoading(true)

		try {
			const docRef = await db.collection('categories').add({
				title,
			})

			navigate(`/admin/redigera/${docRef.id}`)

		} catch (e) {
			setError(e.message)
			setLoading(false)
		}
	}

	return (
		<Row>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title>Skapa ny kategori</Card.Title>

						{error && (<Alert variant="danger">{error}</Alert>)}

						<Form onSubmit={handleSubmit}>

							<Form.Group id="title">
								<Form.Label>Namn på kategorin</Form.Label>
								<Form.Control type="title" onChange={handleTitleChange} value={title} required />
								{title && title.length < 3 && (
									<Form.Text className="text__alert">Namnet på kategorin måste vara minst 3 tecken långt.</Form.Text>
								)}
							</Form.Group>
							<Button disabled={loading} type="submit">Skapa kategori</Button>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default CreateCategory
