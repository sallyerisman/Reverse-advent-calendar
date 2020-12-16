import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoriesGrid = ({ categories }) => {
	return (
		<Row>
			{categories.map(category => (
				<Col sm={6} md={4} lg={3} key={category.id}>
					<Card>
						<Card.Body>
							<Card.Title>
								<Link to={`/kategorier/${category.id}`}>{category.title}</Link>
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default CategoriesGrid
