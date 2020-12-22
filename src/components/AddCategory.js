import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { db } from '../firebase'

const AddCategory = () => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [title, setTitle] = useState("")

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
			await db.collection('categories').add({
				title,
			})

			navigate(`/admin/redigera`)

		} catch (e) {
			setError("Något gick fel och kategorin kunde inte läggas till. Var god försök igen.")
			setLoading(false)
		}
	}

	return (
		<Row>
			<Col>
				<h2>Skapa ny kategori</h2>

				{error && <Alert variant="danger">{error}</Alert>}

				<Form onSubmit={handleSubmit}>
					<Form.Group id="title">
						<Form.Label>Namn på kategorin</Form.Label>
						<Form.Control type="title" onChange={handleTitleChange} value={title} required />

						{title && title.length < 3 && 
							<Form.Text className="text__alert">Namnet på kategorin måste vara minst 3 tecken långt.</Form.Text>
						}

					</Form.Group>
					<Button disabled={loading} type="submit">Skapa kategori</Button>
				</Form>
			</Col>
		</Row>
	)
}

export default AddCategory
