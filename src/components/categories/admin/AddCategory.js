import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'
import { db } from '../../../firebase'

const AddCategory = () => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [title, setTitle] = useState("")
	const [titleExists, setTitleExists] = useState(false)
	const navigate = useNavigate()

	const handleTitleChange = (e) => {
		setTitleExists(false)
		setTitle(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (title.length < 3 || title.length > 16) {
			return;
		}

		setError(false)
		setLoading(true)

		const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)
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
			setLoading(true)

			const urlifiedTitle = title
				.toLowerCase()
				.replace(/\s+/g, '-')
				.replace(/å/g, 'a')
				.replace(/ä/g, 'a')
				.replace(/ö/g, 'o');

			// Add document with the specified title to the collection 
			await db.collection('categories').add({
				products: [],
				title: capitalizedTitle,
				urlParam: urlifiedTitle,
			})

			navigate('/admin/redigera')

		} catch (e) {
			setError("Något gick fel och kategorin kunde inte läggas till. Var god försök igen.")
			setLoading(false)
		}		
	}

	return (
		<div className="page__add-category">
			<h2>Skapa ny kategori</h2>

			{error && <Alert variant="danger">{error}</Alert>}

			<Form onSubmit={handleSubmit}>
				<Form.Group id="title">
					<Form.Control placeholder="Namn på kategorin" type="title" onChange={handleTitleChange} value={title} autoFocus required />

					{title && title.length < 3 && 
						<Form.Text className="text__alert">Namnet på kategorin måste vara minst 3 tecken långt.</Form.Text>
					}

					{title && title.length > 16 && 
						<Form.Text className="text__alert">Namnet på kategorin får max vara 16 tecken långt.</Form.Text>
					}

					{titleExists && 
						<>
							<Form.Text className="text__alert">Det finns redan en kategori med detta namn.</Form.Text>
							<Link to='/admin/redigera'>Tillbaka till redigeringsvyn</Link>
						</>
					}
				</Form.Group>

				<div className="button-wrapper">
					<Button disabled={loading} className="btn button__primary" type="submit">											<Plus className="icon button-icon" />
						Lägg till
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default AddCategory
