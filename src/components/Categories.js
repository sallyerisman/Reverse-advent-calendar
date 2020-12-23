import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import DotLoader from 'react-spinners/DotLoader'
import { useAuth } from '../contexts/AuthContext'
import useCategories from '../hooks/useCategories'
import CategoryGrid from './CategoryGrid'

const Categories = () => {
	const { categories, loading } = useCategories()
	const { currentUser } = useAuth()

	return (
		<Row>
			<Col>
				<h2>Vad vi behöver just nu</h2>

				{loading
					? <DotLoader className="loading-spinner"/>
					: <CategoryGrid categories={categories} />
				}

				{currentUser && 
					<Link to='/admin/ny-kategori' className="btn btn__add-category">Lägg till ny kategori</Link>
				}
			</Col>
		</Row>
	)
}

export default Categories
