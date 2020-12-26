import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'
import editIcon from '../assets/images/icon-edit.svg'
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
							{currentUser 
								? <>
									<Card.Title>{category.title}</Card.Title>
									<div>
										<Link 	
											to={`/admin/redigera/${category.id}`} 
											className="link link__edit-category">
											Redigera
											<img
												src={editIcon}
												className="icon icon__edit"
											/>
										</Link>

										<Button onClick={() => {handleDeleteCategory(category.id)}}>
											Ta bort
										</Button>
									</div>
								</>
								: <Card.Title>
									<Link to={`/donera/${category.id}`}>{category.title}</Link>
								</Card.Title>
							}
						</Card.Body>
					</Card>
				))}
			</Col>
		</Row>
	)
}

export default CategoryGrid
