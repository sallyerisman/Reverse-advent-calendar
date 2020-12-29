import { Col, Row } from 'react-bootstrap'
import DotLoader from 'react-spinners/DotLoader'
import useCategories from '../hooks/useCategories'
import CategoryGrid from './CategoryGrid'

const Categories = () => {
	const { categories, loading } = useCategories()

	return (
		<Row>
			<Col>
				<h2>Vad vi behöver just nu</h2>

				{loading
					? <DotLoader className="loading-spinner"/>
					: <CategoryGrid categories={categories} />
				}
			</Col>
		</Row>
	)
}

export default Categories
