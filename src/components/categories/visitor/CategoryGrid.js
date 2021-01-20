import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

const CategoryGrid = ({ categories }) => {
	return (
		<Row>
			<Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
				{categories.map(category => (
					<Card key={category.id}>
						<Card.Body>
							<Card.Title>
								<Link to={`/donera/${category.urlParam}`} className="link text-link">{category.title}</Link>
							</Card.Title>
						</Card.Body>
					</Card>
				))}
			</Col>
		</Row>
	)
}

export default CategoryGrid
