import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const CategoryGrid = ({ categories }) => {
	return (
		<>
			{categories.map(category => (
				<Card key={category.id}>
					<Card.Body>
						<Card.Title>
							<Link to={`/donera/${category.urlParam}`} className="link title-link">{category.title}</Link>
						</Card.Title>
					</Card.Body>
				</Card>
			))}
		</>
	)
}

export default CategoryGrid
