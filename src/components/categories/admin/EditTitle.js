import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { db } from '../../../firebase'

const EditTitle = ({ category }) => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [newTitle, setNewTitle] = useState("")
	const [titleExists, setTitleExists] = useState(false)
	const navigate = useNavigate()
	const { id, title } = category

	const handleTitleChange = (e) => {
		setTitleExists(false)
		setNewTitle(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (newTitle.length < 3) {
			return;
		}

		setError(false)
		setLoading(true)

		const capitalizedTitle = newTitle.charAt(0).toUpperCase() + newTitle.slice(1)
		let exists;
		
		// Check if the 'categories' collection already has a document with this title 
		await db.collection('categories')
			.where('title', '==', capitalizedTitle)
			.get()
			.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				exists = true;
			});
		});

		if (exists) {
			setLoading(false)
			setTitleExists(true)
			return;				
		} 

		try {
			const urlifiedTitle = newTitle
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/å/g, 'a')
			.replace(/ä/g, 'a')
			.replace(/ö/g, 'o');

			// Update title of document in database
			await db.collection('categories').doc(id).update({
				title: capitalizedTitle,
				urlParam: urlifiedTitle
			});

			navigate(`/admin/redigera/${urlifiedTitle}`)
			window.location.reload()

		} catch (e) {
			setError("Något gick fel och det gick inte att ändra titeln. Var god försök igen.")
		}
	}

	return (
		<Row className="page-content page__edit-title">
			<Col md={{ span: 10}} lg={{ span: 8}}>
				{error && <Alert variant="danger">{error}</Alert>}

				<p>Ändra namnet på kategorin</p>

				<Form onSubmit={handleSubmit}>
					<Form.Group id="title">
						<Form.Control type="title" onChange={handleTitleChange} placeholder="Nytt kategorinamn" value={newTitle} autoFocus />
						
						{title && title.length < 3 && 
							<Form.Text className="text__alert">Namnet på kategorin måste vara minst 3 tecken långt.</Form.Text>
						}

						{titleExists && 
							<>
								<Form.Text className="text__alert">Det finns redan en kategori med detta namn.</Form.Text>
							</>
						}
					</Form.Group>

					<div className="button-wrapper button-wrapper__edit">
						<Button className="btn button__primary" disabled={loading} type="submit">
							Uppdatera
						</Button>

						<span onClick={() => window.location.reload()} className="link text-link ml-5">Ångra</span>									
					</div>
				</Form>
			</Col>
		</Row>
	)
}

export default EditTitle