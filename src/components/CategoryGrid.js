import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import editIcon from '../assets/images/icon-edit.svg'
import { useAuth } from '../contexts/AuthContext'
import ConfirmDelete from './ConfirmDelete'

const CategoryGrid = ({ categories }) => {
	const { currentUser } = useAuth()
	const [confirmDelete, setConfirmDelete] = useState(null);

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
											to={`/admin/redigera/${category.id}`} 
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
										<Link to={`/donera/${category.id}`}>{category.title}</Link>
									</Card.Title>
								}
							</Card.Body>
						</Card>
					))}

					{currentUser && 
						<Link to='/admin/ny-kategori' className="btn btn__new-category">Lägg till ny kategori</Link>
					}
				</>
			}
		</>
	)
}

export default CategoryGrid
