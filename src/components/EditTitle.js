import { useState } from 'react'
import { Row, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'

const EditTitle = ({ categoryId, title }) => {
	const [error, setError] = useState(false)
	const [newTitle, setNewTitle] = useState("")
	const navigate = useNavigate()

	const handleTitleChange = (e) => {
		setNewTitle(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (newTitle.length < 3) {
			return;
		}

		setError(false)

		try {

			await db.collection('categories').doc(categoryId).update({
				"title": newTitle,
			});

			navigate(`/admin/redigera/${categoryId}`)

		} catch (e) {
			setError(e.message)
		}
	}

	return (
		<Row>
			{error && (<Alert variant="danger">{error}</Alert>)}

			<Form onSubmit={handleSubmit}>

				<Form.Group id="title">
					<Form.Label>Uppdatera namnet på kategorin</Form.Label>
					<Form.Control type="title" onChange={handleTitleChange} placeholder={title} value={newTitle} />
					{title && title.length < 3 && (
						<Form.Text className="text__alert">Namnet på kategorin måste vara minst 3 tecken långt.</Form.Text>
					)}
				</Form.Group>
				<Button type="submit">Uppdatera</Button>
			</Form>
		</Row>
	)
}

export default EditTitle
