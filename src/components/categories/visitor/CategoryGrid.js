import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

const CategoryGrid = ({ categories }) => {
	return (
		<Row className="page__category">
			<Col>
				{categories.map(category => (
					<Card key={category.id}>
						<Card.Body>
							<Card.Title>
								<Link to={`/donera/${category.urlParam}`} className="link title-link">{category.title}</Link>
							</Card.Title>
						</Card.Body>
					</Card>
				))}
			</Col>
		</Row>
	)
}

export default CategoryGrid
