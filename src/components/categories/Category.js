import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'
import DotLoader from 'react-spinners/DotLoader'
import { useAuth } from '../../contexts/AuthContext'
import useCategory from '../../hooks/useCategory'
import CategoryContent from './CategoryContent'
import EditCategory from './admin/EditCategory'

const Category = () => {
	const { currentUser } = useAuth()
	const { category, loading } = useCategory()

	return (
		<Row className="page__category">
			<Col>
				{loading 
					? <div className="spinner-wrapper"><DotLoader color="#ffffff"/></div>
					: <>
						{currentUser 
							? <EditCategory />
							: <>
								<h1>{category.title}</h1>

								{category.products.length < 1 
									? <div>Just nu finns det inga produkter i denna kategori</div>
									: <CategoryContent categoryId={category.id} products={category.products}/>					
								}
							</>}
						<Link to="/donera">
							<ArrowLeft className="icon icon__arrow-left"/>                  
						</Link>			
					</>
				}
			</Col>	
		</Row>
	)
}

export default Category


