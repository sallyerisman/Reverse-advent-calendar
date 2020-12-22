import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import useCategories from '../hooks/useCategories'
import CategoryGrid from './CategoryGrid'

const EditCategories = () => {
	const { categories, loading } = useCategories()
	const { currentUser } = useAuth()

	return (
		<Row>
			<Col>
				<h2>Vad vi behöver just nu</h2>

				{loading
					? "Loading..."
					: <CategoryGrid categories={categories} />
				}

				{currentUser && 
					<Link to="/admin/ny-kategori" className="btn btn__add-category">Lägg till ny kategori</Link>
				}
			</Col>
		</Row>
	)
}

export default EditCategories
