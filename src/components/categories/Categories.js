import { Col, Row } from 'react-bootstrap'
import DotLoader from 'react-spinners/DotLoader'
import { useAuth } from '../../contexts/AuthContext'
import useCategories from '../../hooks/useCategories'
import AdminCategoryGrid from './admin/AdminCategoryGrid'
import CategoryGrid from './visitor/CategoryGrid'

const Categories = () => {
	const { categories, loading } = useCategories()
	const { currentUser } = useAuth()

	return (
		<Row>
			<Col>
				<h1>Vad vi behöver just nu</h1>

				{loading
					? <div className="spinner-wrapper"><DotLoader color="#ffffff"/></div>
					: currentUser 
						? <AdminCategoryGrid categories={categories} />
						: <CategoryGrid categories={categories} />
				}
			</Col>
		</Row>
	)
}

export default Categories
