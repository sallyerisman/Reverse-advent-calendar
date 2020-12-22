import { Col, Row } from 'react-bootstrap'
import useCategories from '../hooks/useCategories'
import CategoryGrid from './CategoryGrid'

const Categories = () => {
	const { categories, loading } = useCategories()

	return (
		<Row>
			<Col>
				<h2>Vad vi behöver just nu</h2>

				{loading
					? "Loading..."
					: <CategoryGrid categories={categories} />
				}
			</Col>
		</Row>
	)
}

export default Categories
