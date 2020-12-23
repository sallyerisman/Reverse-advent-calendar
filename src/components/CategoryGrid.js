import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import useDeleteCategory from '../hooks/useDeleteCategory'

const CategoryGrid = ({ categories }) => {
	const { currentUser } = useAuth()
	const [deleteCategory, setDeleteCategory] = useState(null);
	useDeleteCategory(deleteCategory);

	const handleDeleteCategory = (categoryId) => {
		setDeleteCategory(categoryId);
	}

	return (
		<Row>
			<Col>
				{categories.map(category => (
					<Card key={category.id}>
						<Card.Body>
							<Card.Title>
								<Link to={`/donera/${category.id}`}>{category.title}</Link>
							</Card.Title>
							{currentUser && (
								<div>
									<Link to={`/admin/redigera/${category.id}`} className="link__edit-category">Redigera 🖋</Link>

									<span onClick={() => {handleDeleteCategory(category.id)}}>
										Ta bort
									</span>
								</div>
							)}
						</Card.Body>
					</Card>
				))}
			</Col>
		</Row>
	)
}

export default CategoryGrid
