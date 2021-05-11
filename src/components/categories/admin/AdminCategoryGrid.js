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
		<>
			{confirmDelete 
				? <ConfirmDelete category={confirmDelete}/>
				: currentUser &&
					<>
						<h1>Vad vi behöver nu</h1>
						
						<div className="card-wrapper">
							{categories.map(category => (
								<Card key={category.id} className="card__category card__category--admin">
									<Card.Body>							
										<Link to={`/admin/redigera/${category.urlParam}`} className="link title-link">
											<Card.Title className="card-title--admin">{category.title}</Card.Title>	
										</Link>								
										<TrashFill className="icon icon__delete" onClick={() => {handleDeleteCategory(category)}} />
									</Card.Body>
								</Card>		
							))}
						</div>

						{addCategory 
							? <AddCategory />
							: <div className="button-wrapper button-wrapper__add-category">
								<Button className="btn button__primary" onClick={handleAddCategory}>
								<Plus className="icon button-icon" />
								Lägg till kategori
							</Button>
							</div>								
						}
					</>
			}				
		</>
	)
}

export default AdminCategoryGrid
