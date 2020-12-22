import { Link, useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import useCategory from '../hooks/useCategory'
import CategoryContent from './CategoryContent'

const Category = () => {
	const { categoryId } = useParams()
	const { loading, products, title } = useCategory(categoryId)

	return (
		<Row>
			<Col>
				{loading
					? "Loading..."
					: <>
						<h2>{title}</h2>
						{products.length < 1 
							? <div>Just nu finns det inga produkter i denna kategori</div>
							: <CategoryContent products={products}/>					
						}
						<Link to={'/donera/'}>Tillbaka till kategorier</Link>	
					</> 
				}
			</Col>
		</Row>
	)
}

export default Category


