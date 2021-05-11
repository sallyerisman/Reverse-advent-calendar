import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Plus, TrashFill } from 'react-bootstrap-icons'
import { useAuth } from '../../../contexts/AuthContext'
import AddCategory from './AddCategory'
import ConfirmDelete from './ConfirmDelete'

const AdminCategoryGrid = ({ categories }) => {
	const [addCategory, setAddCategory] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(null);

	const { currentUser } = useAuth()

	const handleAddCategory = () => {
        setAddCategory(true);
	};

	const handleDeleteCategory = (category) => {
		setConfirmDelete(category)
	}

	return (
		<Row>
			<Col>
				{confirmDelete 
					? <ConfirmDelete category={confirmDelete}/>
					: currentUser &&
						<>
							{categories.map(category => (
								<Card key={category.id}>
									<Card.Body>
										<Link to={`/admin/redigera/${category.urlParam}`} className="link title-link">
											<Card.Title>{category.title}</Card.Title>
										</Link>
										<TrashFill className="icon icon__delete" onClick={() => {handleDeleteCategory(category)}} />
									</Card.Body>
								</Card>
							))}
							
						{addCategory 
							? <AddCategory />
							: <Button className="btn button__primary" onClick={handleAddCategory}>
								<Plus className="icon button-icon" />
								Lägg till kategori
							</Button>								
						}
					</>
				}				
			</Col>
		</Row>
	)
}

export default AdminCategoryGrid
