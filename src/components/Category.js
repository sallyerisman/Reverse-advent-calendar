import { Link, useParams } from 'react-router-dom'
import CategoryContent from './CategoryContent'
import useCategory from '../hooks/useCategory'

const Category = () => {
	const { categoryId } = useParams()
	const { loading, products, title } = useCategory(categoryId)

	return (
		<>
			{loading
				? ("Loading...")
				: (<>
					<h2>{title}</h2>
					{products.length < 1 
						? (<div>Just nu finns det inga produkter i denna kategori</div>)
						: <CategoryContent products={products}/>					
					}
					<Link to={`/donera/`}>Tillbaka till alla kategorier</Link>	
				</>) 
			}
		</>
	)
}

export default Category


