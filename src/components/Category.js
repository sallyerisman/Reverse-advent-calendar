import { Link, useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import DotLoader from 'react-spinners/DotLoader'
import { useAuth } from '../contexts/AuthContext'
import useCategory from '../hooks/useCategory'
import CategoryContent from './CategoryContent'
import EditCategory from './EditCategory'

const Category = () => {
	const { categoryId } = useParams()
	const { currentUser } = useAuth()
	const { loading, products, title } = useCategory(categoryId)

	return (
		<Row>
			<Col>
			{loading
				? <DotLoader className="loading-spinner"/>
				: currentUser 
					? <>
						<EditCategory categoryId={categoryId}/>
						<Link to={'/admin/redigera'}>Tillbaka till kategorier</Link>
					</>
					: <>
						<h2>{title}</h2>
						{products.length < 1 
							? <div>Just nu finns det inga produkter i denna kategori</div>
							: <CategoryContent categoryId={categoryId} products={products}/>					
						}
						<Link to={'/donera/'}>Tillbaka till kategorier</Link>		
					</>
			}
			</Col>	
		</Row>
	)
}

export default Category


