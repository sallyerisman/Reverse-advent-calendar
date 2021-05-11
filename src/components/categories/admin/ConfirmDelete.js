import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import useDeleteCategory from '../../../hooks/useDeleteCategory'

const ConfirmDelete = ({ category }) => {	
	const [deleteCategory, setDeleteCategory] = useState(null)
	useDeleteCategory(deleteCategory);

	const handleSubmit = async (e) => {
		e.preventDefault()

		setDeleteCategory(category.id);
	}

	return (		
		<>
			<h2>Är du säker på att du vill ta bort kategorin "{category.title}"" och dess innehåll?</h2>

			<Form onSubmit={handleSubmit}>
				<div className="button-wrapper">
					<Button type="submit" className="btn btn__delete-category">Ja, ta bort</Button>	
				</div>

				<Link to="/admin/redigera" onClick={() => window.location.reload()}>Nej, ta mig tillbaka till redigeringsvyn</Link>
			</Form>
		</>		
	)
}

export default ConfirmDelete
