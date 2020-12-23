import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { db } from '../firebase'

const EditTitle = ({ categoryId, title }) => {
	const [error, setError] = useState(false)
	const navigate = useNavigate()
	const [newTitle, setNewTitle] = useState("")

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
				'title': newTitle,
			});

			navigate(`/admin/redigera/${categoryId}`)

		} catch (e) {
			setError("Något gick fel och det gick inte att ändra titeln. Var god försök igen.")
		}
	}

	return (
		<>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group id="title">
                    <Form.Label>Uppdatera namnet på kategorin</Form.Label>
                    <Form.Control type="title" onChange={handleTitleChange} placeholder={title} value={newTitle} />
                    
                    {title && title.length < 3 && 
                        <Form.Text className="text__alert">Namnet på kategorin måste vara minst 3 tecken långt.</Form.Text>
                    }

                </Form.Group>
                <Button type="submit">Uppdatera</Button>
            </Form>
		</>
	)
}

export default EditTitle