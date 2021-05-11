import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const CategoryGrid = ({ categories }) => {
	return (
		<>
			<h1>Vad vi behöver nu</h1>
			<div className="card-wrapper">
				{categories.map(category => (
					<Link to={`/donera/${category.urlParam}`} className="link title-link">					
						<Card key={category.id} className="card__category">
							<Card.Body>
								<Card.Title>{category.title}</Card.Title>
							</Card.Body>
						</Card>
					</Link>
				))}
			</div>
		</>
	)
}

export default CategoryGrid
