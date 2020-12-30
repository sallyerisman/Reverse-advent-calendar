import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import DotLoader from 'react-spinners/DotLoader'
import { useAuth } from '../../contexts/AuthContext'
import useCategory from '../../hooks/useCategory'
import CategoryContent from './CategoryContent'
import EditCategory from './EditCategory'
import NotFound from '../NotFound'

const Category = () => {
	const { currentUser } = useAuth()
	const { category, loading, notFound } = useCategory()

	return (
		<Row>
			<Col>
			{notFound 
				? <NotFound />
				: loading
					? <DotLoader className="loading-spinner"/>
					: currentUser 
						? <>
							<EditCategory />
							<Link to={'/admin/redigera'}>Tillbaka till kategorier</Link>
						</>
						: <>
							<h2>{title}</h2>
							{products.length < 1 
								? <div>Just nu finns det inga produkter i denna kategori</div>
								: <CategoryContent categoryId={category.id} products={category.products}/>					
							}
							<Link to={'/donera/'}>Tillbaka till kategorier</Link>		
						</>
			}
			</Col>	
		</Row>
	)
}

export default Category


