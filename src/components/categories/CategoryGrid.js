import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import editIcon from '../../assets/images/icon-edit.svg'
import { useAuth } from '../../contexts/AuthContext'
import AddCategory from './AddCategory'
import ConfirmDelete from './ConfirmDelete'

const CategoryGrid = ({ categories }) => {
	const { currentUser } = useAuth()
	const [addCategory, setAddCategory] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(null);

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
				: <>
					{categories.map(category => (
						<Card key={category.id}>
							<Card.Body>
								{currentUser 
									? <>
										<Card.Title>{category.title}</Card.Title>
										<Link 	
											to={`/admin/redigera/${category.urlParam}`} 
											className="link link__edit-category">
											Redigera
											<img
												src={editIcon}
												className="icon icon__edit"
											/>
										</Link>

										<Button onClick={() => {handleDeleteCategory(category)}}>
											Ta bort
										</Button>
									</>
									: <Card.Title>
										<Link to={`/donera/${category.urlParam}`}>{category.title}</Link>
									</Card.Title>
								}
							</Card.Body>
						</Card>
					))}

					{currentUser && addCategory 
						? <AddCategory />
						: <Button onClick={handleAddCategory} type="button">Skapa ny kategori</Button>
					}
				</>
			}
		</>
	)
}

export default CategoryGrid
