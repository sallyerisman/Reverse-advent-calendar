import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const CategoryGrid = ({ categories }) => {
	const { currentUser } = useAuth()

	return (
		<Row>
			{categories.map(category => (
				<Col sm={6} md={4} lg={3} key={category.id}>
					<Card>
						<Card.Body>
							<Card.Title>
								<Link to={`/donera/${category.id}`}>{category.title}</Link>
							</Card.Title>
							{currentUser && (
								<div>
									<Link to={`/admin/redigera/${category.id}`} className="link__edit-category">Redigera 🖋</Link>
								</div>
							)}
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default CategoryGrid
