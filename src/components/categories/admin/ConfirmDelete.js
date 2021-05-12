import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import useDeleteCategory from '../../../hooks/useDeleteCategory'

const ConfirmDelete = ({ category }) => {	
	const [deleteCategory, setDeleteCategory] = useState(null)
	useDeleteCategory(deleteCategory);

	const handleSubmit = async (e) => {
		e.preventDefault()

		setDeleteCategory(category.id);
	}

	return (		
		<Row className="page-content page__delete-category">
			<Col md={{ span: 10}} lg={{ span: 8}}>
				<p>Är du säker på att du vill ta bort kategorin "{category.title}"" och dess innehåll?</p>

				<Form onSubmit={handleSubmit}>
					<div className="button-wrapper">
						<Button type="submit" className="btn button__primary btn__delete-category">Ja, ta bort</Button>	
					</div>

					<Link className="link text-link" to="/admin/redigera" onClick={() => window.location.reload()}>
						Nej, ta mig tillbaka till redigeringsvyn
					</Link>
				</Form>
			</Col>
		</Row>		
	)
}

export default ConfirmDelete
