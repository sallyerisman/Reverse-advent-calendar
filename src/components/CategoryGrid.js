import { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import useDeleteCategory from '../hooks/useDeleteCategory'

const CategoryGrid = ({ categories }) => {
	const { currentUser } = useAuth()
	const [deleteCategory, setDeleteCategory] = useState(null);
	useDeleteCategory(deleteCategory);

	const handleDeleteCategory = (category) => {
		setDeleteCategory(category);
	}

	return (
		<Row>
			{categories.map(category => (
				<Col sm={6} md={4} lg={3} key={category.id}>
					<Card>
						<Card.Body>
							<Card.Title>
								<Link to={`/donera/${category.id}`}>{category.title}</Link>
							</Card.Title>
							{currentUser && (
								<div>
									<Link to={`/admin/redigera/${category.title}`} className="link__edit-category">Redigera 🖋</Link>

									<span 
										onClick={() => {handleDeleteCategory(category.id)
									}}>
										Ta bort
									</span>
								</div>
							)}
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default CategoryGrid
